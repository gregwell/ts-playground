import { MyClusterDetectorFactory } from "./MyClusterDetector";
import { ClusterDetector } from "./ClusterDetector";

let detector: ClusterDetector;

detector = new MyClusterDetectorFactory().create(5);

detector.accept(100);
detector.accept(0);
detector.accept(7);
detector.accept(2);

console.log(detector.clusterCount());
