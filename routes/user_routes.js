import { Router } from "express";
import { getProfile, login, logout, register } from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.post('/register', upload.single('avatar'), register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me',isLoggedIn, getProfile);
router.post('/reset', forgetPassword);
router.post('/reset/:resetToken', resetPassword);
router.post('/change-password', isLoggedIn, changePassword);
router.put('/update/:id', isLoggedIn, upload.single('avatar'), updateUser);

export default router;