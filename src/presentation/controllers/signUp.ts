import SignUpUseCase from "../../domain/useCase/signupUseCase";
import HttpResponse from "../helpers/http-response";

class SignUp {
  signUpUseCase: SignUpUseCase;
  constructor(signUpUseCase: SignUpUseCase) {
    this.signUpUseCase = signUpUseCase;
  }
  handle = async (httpRequest: any) => {
    try {
      const { userName, email, password } = httpRequest;
      if (!userName || !email || !password) throw new Error("invalid params");
      await this.signUpUseCase.signup(userName, email, password);
      return HttpResponse.ok({ created: true });
    } catch (error) {
      return HttpResponse.badRequest(error);
    }
  };
}

export default SignUp;
