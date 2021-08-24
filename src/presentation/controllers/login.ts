import AuthUseCase from "../../domain/useCase/authUseCase";
import HttpResponse from "../helpers/http-response";

class Login {
  authUseCase: AuthUseCase;
  constructor(authUseCase: AuthUseCase) {
    this.authUseCase = authUseCase;
  }
  handle = async (httpRequest: any) => {
    try {
      const { email, password } = httpRequest;
      if (!email || !password) throw new Error("invalid params");
      const authUser = await this.authUseCase.auth(email, password);
      return HttpResponse.ok(authUser);
    } catch (error) {
      return HttpResponse.badRequest(error);
    }
  };
}
export default Login;
