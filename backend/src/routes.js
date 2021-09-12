import { Router } from 'express';

import UserController from './app/Controller/UserController';

import SessionController from './app/Controller/SessionController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Source Route' }));

routes.post('/login', SessionController.store);

routes.post('/user', UserController.store);

export default routes;
