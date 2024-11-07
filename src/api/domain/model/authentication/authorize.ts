export interface Authorize<R, S, N> {
    authorize(req: R, res: S, next: N): void;
}
  