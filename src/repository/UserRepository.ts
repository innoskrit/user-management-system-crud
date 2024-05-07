import { User } from "../model/User";

class UserRepository {

    private userList: User[];

    public constructor() {
        this.userList = [];
    }

    public createUser(user: User): User {
        this.userList.push(user);
        return user;
    }

    public getUsers(): User[] {
        return this.userList;
    }

    public updateUser(userId: number, user: User): User | null {
        for(let i = 0; i < this.userList.length; i++) {
            if(this.userList[i].id === userId) {
                this.userList[i].name = user.name;
                return this.userList[i];
            }
        }
        return null;
    }

    public getUser(userId: number): User | null {
        for(let i = 0; i < this.userList.length; i++) {
            if(this.userList[i].id === userId) {
                return this.userList[i];
            }
        }
        return null;
    }

    public deleteUser(userId: number): User | null {
        const index = this.userList.findIndex(user => user.id === userId);
        if(index === -1) {
            return null;
        }
        const deletedUser = this.userList.splice(index, 1)[0];
        return deletedUser;
    }
}

export default UserRepository;