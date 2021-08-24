import { FindUser } from "../../repository/mongo";
import UserInterface from "../../model/userModel";
import { auth } from "../../security/indexJWT";

class authUseCase {
  loadUSerByEmailRepository: any;
  encrypter: any;
  tokenGenerator: any;
  constructor(
    loadUserByEmailRepository: any,
    encrypter: any,
    tokenGenerator: any
  ) {
    this.loadUSerByEmailRepository = loadUserByEmailRepository;
    this.encrypter = encrypter;
    this.tokenGenerator = tokenGenerator;
  }
  async auth(email: string, password: string) {
    const userFound = await this.loadUSerByEmailRepository.load(email);
    if (!userFound) {
      return null;
    }
    const isValid = await this.encrypter.compare(password, userFound.password);
    if (!isValid) {
      return {
        auth: false,
      };
    }
    // const token = auth(email);
    const token = await this.tokenGenerator.generate(email);
    return {
      auth: true,
      userEmail: email,
      token,
    };
  }
}

export default authUseCase;
