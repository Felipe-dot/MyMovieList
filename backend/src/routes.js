import { Router } from 'express';

import UserController from './app/Controller/UserController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Source Route' }));

routes.post('/user', UserController.store);

export default routes;
