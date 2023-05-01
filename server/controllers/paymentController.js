import mongoose from "mongoose";
import Razorpay from 'razorpay'

const KEY_ID = 'rzp_test_21sHxZwlksmBjj'
const KEY_SECRET = '6HIU3rrxmJ3uXLl9GvBHBYL4'

export const paymentOrders = async(req,res) => {
    var instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET })

    var options = {
        amount: req.body.amount * 100,
        currency: "INR",
    }

    instance.orders.create(options,function(err,order){
        if(err){
            return res.send({code:500, message:'sever error'})
        }
        return res.send({code:200, message:'order created', data:order})
    })

}

export const paymentVerify = async(req,res) => {
    generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

    if (generated_signature == razorpay_signature) {
        res.send({code:200,message:'sign valid'})
    }
    else{
        res.send({code:500,message:'sign invalid'})
    }

}