import express from 'express';
const router = express.Router();

router.post('/status', (req, res) => {
    res.status(200).json({
        message: "server vẫn hoạt động tốt! POST"
    })
})

let studentList = [
    {
        id: 5,
        name: "Phước"
    },
    {
        id: 8,
        name: "hoa"
    },
    {
        id: 10,
        name: "Kiên"
    }
]

router.get('/status', (req, res) => {

    res.status(200).json(
        {
            message: "Lấy data thành công",
            data: studentList
        }
    )
    
})

module.exports = router;