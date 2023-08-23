import { Router } from 'express';
import { verifyUser } from '../app/controllers/auth.controller';

const router = Router();

router.post('/verify-user', (req, res, next) => verifyUser(req, res, next));

export default router;
