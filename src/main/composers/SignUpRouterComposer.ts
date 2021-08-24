import SignupUseCase from "../../domain/useCase/signupUseCase";
import SignUp from "../../presentation/controllers/signin";
import UserRepository from "../../infra/repository/UserRepository";
import CryptRepository from "../../infra/repository/CryptRepository";

class SignUpComposer {
  static compose() {
    const userRepository = new UserRepository();
    const cryptRepository = new CryptRepository();
    const signUpUseCase = new SignupUseCase(userRepository, cryptRepository);
    return new SignUp(signUpUseCase);
  }
}

export default SignUpComposer;
