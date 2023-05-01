import express from 'express'
import {paymentOrders,paymentVerify} from '../controllers/paymentController.js'


const router = express.Router()

router.post('/orders',paymentOrders)
router.post('/verify',paymentVerify);

export default router