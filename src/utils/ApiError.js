class APIError extends Error {
  constructor(statusCode, message = "Somehting went Wrong", errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
  }
}
export { APIError };
