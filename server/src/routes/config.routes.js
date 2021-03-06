import { Router } from 'express';
import * as ConfigController from '../controllers/config.controller';
import postImages from './middlewares/postImages'

const router = new Router();

import multer from 'multer'

// Get all Posts
router.route('/').get(ConfigController.getConfig);

router.route('/menu').post(ConfigController.updateMenu);

router.route('/images').post(postImages.single('logo'), ConfigController.uploadLogo);

export default router;

