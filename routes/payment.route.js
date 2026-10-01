import { Router } from 'express';
import { allPayments, buySubscription, verifySubscription, cancelSubscription, getRazorpayApiKey } from '../controllers/payment.controller.js';
import { authorizedRoles, isLoggedIn } from '../middlewares/auth.middleware.js'; 

const router = Router();

router
    .route('/razorpay-key')
    .get(
        isLoggedIn,
        getRazorpayApiKey
    );

    router 
        .route('/subcribe')
        .post(
            isLoggedIn,
            buySubscription
        )

    router
        .route('/verify')
        .post(
            isLoggedIn,
            verifySubscription
        )

    router
        .route('/unsubcribe')
        .post(
            isLoggedIn,
            cancelSubscription
        )

    router
        .route('/')
        .get(
            isLoggedIn,
            authorizedRoles('ADMIN'),
            allPayments
        );

    export default router;