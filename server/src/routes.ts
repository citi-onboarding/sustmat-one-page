import express from 'express';
import HiringSectionController from '@controllers/HiringSectionController';
import CarouselController from '@controllers/CarouselController';
import AdventageSectionController from '@controllers/AdventageSectionController';
import { SendMail } from '@controllers/MailControler';

const routes = express.Router();

const carouselController = new CarouselController();
const adventageController = new AdventageSectionController();
const hiringController = new HiringSectionController();

routes.put('/carousel/:id', carouselController.update);
routes.post('/carousel', carouselController.create);
routes.get('/carousel', carouselController.get);
routes.delete('/carousel/:id', carouselController.delete);

routes.post('/adventage', adventageController.create);
routes.get('/adventage', adventageController.get);
routes.delete('/adventage/:id', adventageController.delete);
routes.put('/adventage/:id', adventageController.update);

routes.post('/hiring', hiringController.create);
routes.get('/hiring', hiringController.get);
routes.delete('/hiring/:id', hiringController.delete);
routes.put('/hiring/:id', hiringController.update);

routes.post('/email', SendMail);

export default routes;