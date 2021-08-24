import CryptRepository from "../../infra/repository/CryptRepository";
import TokenRepository from "../../infra/repository/TokenRepository";
import UserRepository from "../../infra/repository/UserRepository";

class AuthUseCase {
  loadUSerByEmailRepository: UserRepository;
  encrypter: CryptRepository;
  tokenGenerator: TokenRepository;
  constructor(
    loadUserByEmailRepository: UserRepository,
    encrypter: CryptRepository,
    tokenGenerator: TokenRepository
  ) {
    this.loadUSerByEmailRepository = loadUserByEmailRepository;
    this.encrypter = encrypter;
    this.tokenGenerator = tokenGenerator;
  }
  async auth(email: string, password: string): Promise<any> {
    const userFound = await this.loadUSerByEmailRepository.load(email);
    if (!userFound) {
      return null;
    }
    const isValid = await this.encrypter.validatecryptography(
      password,
      userFound.password
    );
    if (!isValid) {
      return {
        auth: false,
      };
    }
    const token = await this.tokenGenerator.generate(email);
    return {
      auth: true,
      userEmail: email,
      token,
    };
  }
}

export default AuthUseCase;
