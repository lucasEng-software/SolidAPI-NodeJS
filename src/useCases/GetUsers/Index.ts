import { UsersRespository } from '../../repositories/Implementations/UsersRepository';
import { GetUsersCase } from './GetUsersCase';
import { GetUsersController } from './GetUsersController';

const usersRespository = new UsersRespository();

const getUsersCase = new GetUsersCase(
    usersRespository,
)

const getUsersController = new GetUsersController(
    getUsersCase,
)

export { getUsersCase, getUsersController}