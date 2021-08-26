import AuthUseCase from "../../../src/domain/useCase/authUseCase";
import UserRepository from "../../../src/infra/repository/UserRepository";
import CryptRepository from "../../../src/infra/repository/CryptRepository";
import TokenRepository from "../../../src/infra/repository/TokenRepository";

const mockUserRepository = jest.fn(() => {
  return "mockedEmail@mock.com";
});
const mockTokenRepository = jest.fn(() => {
  return true;
});

jest.mock("../../../src/infra/repository/UserRepository", () => {
  return jest.fn().mockImplementation(() => {
    return { load: mockUserRepository, insert: mockUserRepository };
  });
});

jest.mock("../../../src/infra/repository/CryptRepository", () => {
  return jest.fn().mockImplementation(() => {
    return { validatecryptography: mockTokenRepository };
  });
});

var auth: any = null;
beforeEach(() => {
  const userRepositoryMock = new UserRepository();
  const cryptoRepository = new CryptRepository();
  const tokenRepository = new TokenRepository();
  auth = new AuthUseCase(userRepositoryMock, cryptoRepository, tokenRepository);
});

test("Should Auth user with mocked email", async () => {
  const test = await auth.auth("mockedEmail", "mock1234");
  expect(test.auth).toBe(true);
});
