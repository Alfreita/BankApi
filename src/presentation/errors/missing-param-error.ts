class MissingParamError extends Error {
  name: string;
  constructor(paramName: string) {
    super(`Missing param:${paramName}`);
    this.name = "MissingParamError";
  }
}
export default MissingParamError;
