import { ClusterDetector, ClusterDetectorFactory } from "./ClusterDetector";

export class MyClusterDetectorFactory implements ClusterDetectorFactory {
  create(spacing: number): ClusterDetector {
    if (spacing < 0) {
      throw new Error("Negative number passed");
    }
    return new MyClusterDetector(spacing);
  }
}

class MyClusterDetector implements ClusterDetector {
  constructor(readonly spacing: number) {}

  clusters: number[][] = [];

  accept = (value: number): void => {
    let boundarySide = -1;
    if (!this.clusters.length) {
      this.clusters.push([value, value]);
    } else {
      for (
        let potentialClusterToReplaceValue = 0;
        potentialClusterToReplaceValue < this.clusters.length;
        potentialClusterToReplaceValue++
      ) {
        if (
          value >
            this.clusters[potentialClusterToReplaceValue][0] - this.spacing &&
          value <
            this.clusters[potentialClusterToReplaceValue][1] + this.spacing
        ) {
          if (value < this.clusters[potentialClusterToReplaceValue][0]) {
            boundarySide = 0;
          } else if (value > this.clusters[potentialClusterToReplaceValue][1]) {
            boundarySide = 1;
          }
          if (boundarySide >= 0) {
            this.clusters[potentialClusterToReplaceValue][boundarySide] = value;
            for (
              let potentialClusterToRemove = 0;
              potentialClusterToRemove < this.clusters.length;
              potentialClusterToRemove++
            ) {
              if (
                Math.abs(
                  this.clusters[potentialClusterToRemove][boundarySide] - value
                ) <= this.spacing &&
                potentialClusterToRemove != potentialClusterToReplaceValue
              ) {
                this.clusters[potentialClusterToReplaceValue][
                  boundarySide
                ] = this.clusters[potentialClusterToRemove][boundarySide];
                this.clusters.splice(potentialClusterToRemove, 1);
              }
            }
          }
          potentialClusterToReplaceValue = this.clusters.length;
        } else {
          if (potentialClusterToReplaceValue === this.clusters.length - 1) {
            this.clusters.push([value, value]);
          }
        }
      }
    }
  };

  clusterCount = (): number => {
    return this.clusters.length;
  };
}
