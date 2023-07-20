/*Load file .env*/
import dotenv from 'dotenv';
dotenv.config();

import express from 'express'; // import thư viện express

const server = express(); // tạo ra server bằng express function

/*
    - import router config
    - yêu cầu server sử dụng router này.
*/
import {access} from './middlewares/access.middleware';

import routerConfig from './routes';
server.use("/api", access, routerConfig);

/* Kết nối mysql */
import {mysqlDBConnect} from './mysql.config';
mysqlDBConnect();

/* server lắng nghe cổng $PORT trên máy tính. */
server.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})