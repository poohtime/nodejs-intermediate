import express, { Router } from 'express';
import { needSignin } from '../middlewares/need-signin.middleware.js';
import db from '../../models/index.cjs';
import { ProductsController } from '../controllers/products.controller.js';
import authenticate from '../../middlewares/auth.middleware.js';

const { Products, User } = db;
const router = express.Router();
const productsRouter = Router()
const productsController = new ProductsController();

//상품생성
productsRouter.post('', needSignin, productsController.createOne) 

/* 상품조회 API (Read) */
router.get('/products', productsController.getProducts);

/* 특정 상품 상세 조회 (Read) */
router.get('/products/:productId', productsController.getProductById);


/* 아래 API는 모두 로그인 후 이용이 가능하여, auth 미들웨어 적용 */
router.use(authenticate);

/* 상품등록 API (Create) */
router.post('/products', productsController.createProduct);

/* 특정 상품 수정 (Update) */
router.put('/products/:productId', productsController.updateProduct);

/* 특정 상품 삭제하기 (Delete) */
router.delete('/products/:productId', productsController.deleteProduct);

export default router; 