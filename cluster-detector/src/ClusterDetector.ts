export interface ClusterDetectorFactory {
  create(spacing: number): ClusterDetector;
}

export interface ClusterDetector {
  accept(value: number): void;
  clusterCount(): number;
}
