import UserRepository from "../../infra/repository/UserRepository";
import CryptRepository from "../../infra/repository/CryptRepository";

class SignupUseCase {
  userRepository: UserRepository;
  encrypter: CryptRepository;
  constructor(userRepository: UserRepository, encrypter: CryptRepository) {
    this.userRepository = userRepository;
    this.encrypter = encrypter;
  }
  async signup(username: string, email: string, password: string) {
    const user = {
      username,
      email,
      password: await this.encrypter.cryptPassword(password),
    };
    const inserted = await this.userRepository.insert(
      user.username,
      user.email,
      user.password
    );
    return inserted._id;
  }
}
export default SignupUseCase;
