import { ContactService } from "../services/contact.service";
import { LoginService } from "../services/login.service";
import { ProfileService } from "../services/profile.service";
import { UserService } from "../services/user.service";
import { ContactController } from "./contact.controller";
import { LoginController } from "./login.controller";
import { ProfileController } from "./profile.controller";
import { UserController } from "./user.controller";

const userService = new UserService();
const userController = new UserController(userService);

const loginService = new LoginService();
const loginController = new LoginController(loginService);

const contactService = new ContactService();
const contactController = new ContactController(contactService);

const profileService = new ProfileService();
const profileController = new ProfileController(profileService);

export {
  userController,
  loginController,
  contactController,
  profileController,
};
