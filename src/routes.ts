import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UsersController } from './controllers/UsersController';

const router = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();

router.post("/users", usersController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export { router };