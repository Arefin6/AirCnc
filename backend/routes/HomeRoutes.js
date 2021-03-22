import express from 'express';
import {getAllHomes} from '../controllers/homeController.js';

const router = express.Router()

router.get('/',getAllHomes)

export default router
