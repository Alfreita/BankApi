import { hash, compare } from "../helpers/bcrypt";

class CryptRepository {
  async cryptPassword(plaintext: string): Promise<string> {
    return hash(plaintext);
  }
  async validatecryptography(
    plaintext: string,
    digest: string
  ): Promise<boolean> {
    return await compare(plaintext, digest);
  }
}
export default CryptRepository;
