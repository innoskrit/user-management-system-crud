import { User } from "../model/User";
import UserRepository from "../repository/UserRepository";

class UserService {

    private readonly userRepository: UserRepository;

    public constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public createUser(user: User): User {
        const insertedUser = this.userRepository.createUser(user);
        return insertedUser;
    }

    public getUsers(): User[] {
        return this.userRepository.getUsers();
    }

    public updateUser(userId: number, user: User): User | null {
        return this.userRepository.updateUser(userId, user);
    }

    public getUser(userId: number): User | null {
        return this.userRepository.getUser(userId);
    }

    public deleteUser(userId: number): User | null {
        return this.userRepository.deleteUser(userId);
    }
}

export default UserService;