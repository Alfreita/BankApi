import AuthUseCase from "../../../src/domain/useCase/authUseCase";
import TokenRepository from "../../../src/infra/repository/TokenRepository";

describe("Should test user mocked", () => {
  jest.mock("../../../src/infra/repository/UserRepository", () => {
    return jest.fn().mockImplementation(() => {
      return { load: jest.fn(async () => "mockedEmail@mock.com") };
    });
  });
  jest.mock("../../../src/infra/repository/CryptRepository", () => {
    return jest.fn().mockImplementation(() => {
      return { validatecryptography: jest.fn(async () => true) };
    });
  });
  const UserRepository = require("../../../src/infra/repository/UserRepository");
  const CryptRepository = require("../../../src/infra/repository/CryptRepository");

  const userRepositoryMock = new UserRepository();
  const cryptoRepository = new CryptRepository();
  const tokenRepository = new TokenRepository();

  var auth = new AuthUseCase(
    userRepositoryMock,
    cryptoRepository,
    tokenRepository
  );

  it("Should Auth user with mocked email", async () => {
    const test = await auth.auth("mockedEmail", "mock1234");
    expect(test.auth).toBe(true);
  });
});
describe("should not auth user", () => {
  jest.resetModules();
  jest.mock("../../../src/infra/repository/UserRepository", () => {
    return jest.fn().mockImplementation(() => {
      return { load: jest.fn(async () => null) };
    });
  });
  jest.mock("../../../src/infra/repository/CryptRepository", () => {
    return jest.fn().mockImplementation(() => {
      return { validatecryptography: jest.fn(async () => true) };
    });
  });
  const UserRepository = require("../../../src/infra/repository/UserRepository");
  const CryptRepository = require("../../../src/infra/repository/CryptRepository");

  const userRepositoryMock = new UserRepository();
  const cryptoRepository = new CryptRepository();
  const tokenRepository = new TokenRepository();

  var auth = new AuthUseCase(
    userRepositoryMock,
    cryptoRepository,
    tokenRepository
  );

  it("Should not Auth user invalid email", async () => {
    const test = await auth.auth("mockedEmail", "mock1234");
    expect(test.auth).toBe(false);
  });
});

describe("should not auth user password not valid", () => {
  jest.resetModules();
  jest.mock("../../../src/infra/repository/UserRepository", () => {
    return jest.fn().mockImplementation(() => {
      return { load: jest.fn(async () => "mockedEmail@mock.com") };
    });
  });
  jest.mock("../../../src/infra/repository/CryptRepository", () => {
    return jest.fn().mockImplementation(() => {
      return { validatecryptography: jest.fn(async () => false) };
    });
  });
  const UserRepository = require("../../../src/infra/repository/UserRepository");
  const CryptRepository = require("../../../src/infra/repository/CryptRepository");

  const userRepositoryMock = new UserRepository();
  const cryptoRepository = new CryptRepository();
  const tokenRepository = new TokenRepository();

  var auth = new AuthUseCase(
    userRepositoryMock,
    cryptoRepository,
    tokenRepository
  );

  it("Should not Auth user with mocked email, invalid password", async () => {
    const test = await auth.auth("mockedEmail", "mock1234");
    expect(test.auth).toBe(false);
  });
});
