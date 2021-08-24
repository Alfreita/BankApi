import SignUpUseCase from "../../domain/useCase/signupUseCase";
import HttpResponse from "../helpers/http-response";

class SignUp {
  signUpUseCase: SignUpUseCase;
  constructor(signUpUseCase: SignUpUseCase) {
    this.signUpUseCase = signUpUseCase;
  }
  create = async (httpRequest: any) => {
    try {
      const { userName, email, password } = httpRequest;
      const user = {
        userName,
        email: email,
        password,
      };
      if (!userName || !email || !password) throw new Error("invalid params");
      this.signUpUseCase.signup(userName, email, password);
      return HttpResponse.ok({ created: true });
    } catch (error) {
      return HttpResponse.badRequest(error);
    }
  };
}

export default SignUp;
