import express from 'express';
import  authController from '../../controller/auth.controller.js';


const router = express.Router();
const authController = new authController

// 회원가입
router.post('/signup', authController.signupUser);
// 로그인
router.post('/signin', authController.signinUser);

export  router
