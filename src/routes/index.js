import express from 'express';
const router = express.Router();

/* API VERSION */
import v1 from './v1'; // version api 1.0
import admin from  './admin' // version ap vip

/* MIDDLEWARE */
import {adminCheck} from '../middlewares/admin.middleware'

router.use("/v1", v1);
router.use("/admin", adminCheck, admin);

module.exports = router;