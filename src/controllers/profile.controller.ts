import { ProfileService } from "../services/profile.service";
import { Request, Response } from "express";

export class ProfileController {
  constructor(private profileService: ProfileService) {}

  read(req: Request, res: Response) {
    const user = this.profileService.read(res.locals.foundUser);

    return res.json(user);
  }
}
