import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            name: "User Test",
            password: "1234",
            driver_license: "00123",
            email: "user@test.com",
        }

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email, 
            password: user.password
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate an nonexistent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "555"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate with incorrect password", () => {
        expect(async () => {

            const user: ICreateUserDTO = {
                name: "User Test",
                password: "1234",
                driver_license: "00123",
                email: "user@test.com",
            }
    
            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "incorrect password"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

});