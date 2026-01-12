import {Router} from 'express'
import { register, login, userProfile,getAllUsers } from "../controllers/user.controller.js";
import { auth } from '../middlewares/auth.middleware.js';

const router=Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/users").get(auth,getAllUsers);
router.route("/profile").get(auth, userProfile);

export default router