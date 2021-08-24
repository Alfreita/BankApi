import { FindUser, InsertUser } from "../helpers/mongo";
import UserInterface from "../../model/userModel";
class UserRepository {
  async load(email: string) {
    const user = await FindUser(email);
    return user;
  }
  async insert(userName: string, email: string, password: string) {
    const user: UserInterface = {
      userName,
      email,
      password,
    };
    const inserted = await InsertUser(user);
    return inserted;
  }
}

export default UserRepository;
