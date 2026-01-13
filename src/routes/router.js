import express from 'express'
const router = express.Router()
import {saveproduct , readproduct} from '../controllers/productController.js'
import{signupcontroller,verifyEmail, logincontroller} from '../controllers/Authentication.js'
router.post('/saveproduct', saveproduct)
router.get('/readproduct', readproduct)
router.post('/signup',signupcontroller)
router.post('/verifyEmail',verifyEmail)
router.post('/login',logincontroller)
export default router; 