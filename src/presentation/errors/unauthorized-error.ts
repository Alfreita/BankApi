class UnathorizedError extends Error {
  name: string;
  constructor() {
    super("Unathorized");
    this.name = "UnathorizedError";
  }
}
export default UnathorizedError;
