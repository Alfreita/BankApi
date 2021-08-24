import { FindUser, InsertUser } from "../helpers/mongo";
import UserInterface from "../../model/userModel";
class UserRepository {
  async load(email: string): Promise<any> {
    return FindUser(email);
  }
  async insert(userName: string,email: string,password: string): Promise<any> {
    const user: UserInterface = {
      userName,
      email,
      password,
    };
    return InsertUser(user);
  }
}

export default UserRepository;
