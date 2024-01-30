import { ContactService } from "../services/contact.service";
import { LoginService } from "../services/login.service";
import { UserService } from "../services/user.service";
import { ContactController } from "./contact.controller";
import { LoginController } from "./login.controller";
import { UserController } from "./user.controller";

const userService = new UserService();
const userController = new UserController(userService);

const loginService = new LoginService();
const loginController = new LoginController(loginService);

const contactService = new ContactService();
const contactController = new ContactController(contactService);

export { userController, loginController, contactController };
