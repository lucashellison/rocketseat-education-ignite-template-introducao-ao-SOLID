import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (user) {
      if (user.admin) {
        throw new Error("User is already set as Admin!");
      }
    } else {
      throw new Error("User not found!");
    }
    return this.usersRepository.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
