import {checkIp} from '../utils/checkIp.util'
let flag = true;
module.exports = {
    access: async function(req, res, next) {
        let ipAddress = req.headers['x-forwarded-for'];
        let result = await checkIp(ipAddress);
        if (flag) {
            next();
        }else {
            res.status(500).send("Server đã chặn kết nối!")
        }
    }
}