import HttpResponse from "../helpers/http-response";

class Login {
  authUseCase: any;
  constructor(authUseCase: any) {
    this.authUseCase = authUseCase;
  }
  login = async (httpRequest: any) => {
    try {
      const { email, password } = httpRequest.body;
      if (!email || !password) throw new Error("invalid params");
      const authUser = await this.authUseCase.auth(email, password);
      return HttpResponse.ok(authUser);
    } catch (error) {
      return HttpResponse.badRequest(error);
    }
  };
}
// const create = async (httpRequest: any) => {
//   try {
//     const { userName, email, password } = req.body;
//     const user: UserInterface = {
//       userName,
//       email: email,
//       password,
//     };
//     if (!userName || !email || !password) throw new Error("invalid params");
//     await InsertUser(user);
//     return res.status(200).json({ created: true });
//   } catch (error) {
//     return HttpResponse.badRequest(error);
//   }
// };

// const logout = (httpRequest) => {
//   return res.status(200).json({ auth: false });
// };

// export { create, login, logout };

export default Login;
