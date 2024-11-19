import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: "You have reached user-service: user routes." })
})

export default router;