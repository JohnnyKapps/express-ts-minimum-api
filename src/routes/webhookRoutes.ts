import express from 'express';
import * as webhookController from '../controllers/webhookController';

const router = express.Router();

router.post('/', webhookController.receiveWebHookData);

export default router;