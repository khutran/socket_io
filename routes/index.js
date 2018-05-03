import express from 'express';
import ApiRouter from './api';
const router = express.Router();

router.use('/api', ApiRouter)
router.get('/', (req, res) => res.render('index'));

export default router;
