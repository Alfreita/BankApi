import MissingParamError from "../errors/missing-param-error";
import UnathorizedError from "../errors/unauthorized-error";

class HttpResponse {
  static badRequest(paramName: string) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName),
    };
  }
  static serverError() {
    return {
      statusCode: 500,
    };
  }
  static unauthorizeError() {
    return {
      statusCode: 401,
      body: new UnathorizedError(),
    };
  }
  static ok(data: any) {
    return {
      statusCode: 200,
      body: data,
    };
  }
}

export default HttpResponse;
