import { MyClusterDetectorFactory } from "./MyClusterDetector";
import { ClusterDetector } from "./ClusterDetector";

describe("Input testing", () => {
  let detector: ClusterDetector;

  it("should throw an error if negative spacing is passed", () => {
    expect(() => {
      detector = new MyClusterDetectorFactory().create(-5);
    }).toThrow();
  });
});

describe("Basic testing with spacing 5", () => {
  let detector: ClusterDetector;
  beforeEach(() => {
    detector = new MyClusterDetectorFactory().create(5);
  });

  it("should return 0 if never called", () => {
    expect(detector.clusterCount()).toEqual(0);
  });

  it("should return 1 if called once", () => {
    detector.accept(1);
    expect(detector.clusterCount()).toEqual(1);
  });

  it("returns 1 if called with overlapping", () => {
    detector.accept(1);
    detector.accept(2);
    expect(detector.clusterCount()).toEqual(1);
  });

  it("returns 2 if called with evidently non-overlapping", () => {
    detector.accept(1);
    detector.accept(10);
    expect(detector.clusterCount()).toEqual(2);
  });

  it("should append a value to the first cluster and merge it with the second", () => {
    detector.accept(0);
    detector.accept(7);
    detector.accept(2);
    expect(detector.clusterCount()).toEqual(1);
  });

  it("should append a value to the second cluster and merge it with the first", () => {
    detector.accept(100);
    detector.accept(92);
    detector.accept(96);
    expect(detector.clusterCount()).toEqual(1);
  });
});
