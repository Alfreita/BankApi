import AuthUseCase from "../../domain/useCase/authUseCase";
import TokenRepository from "../../infra/repository/TokenRepository";
import UserRepository from "../../infra/repository/UserRepository";
import CryptRepository from "../../infra/repository/CryptRepository";
import SignIn from "../../presentation/controllers/signIn";

class SignInRouterComposer {
  static compose() {
    const userRepository = new UserRepository();
    const cryptRepository = new CryptRepository();
    const tokenRepository = new TokenRepository();
    return new SignIn(
      new AuthUseCase(userRepository, cryptRepository, tokenRepository)
    );
  }
}
export default SignInRouterComposer;
