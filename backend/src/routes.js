import { Router } from 'express';

import UserController from './app/Controller/UserController';

import SessionController from './app/Controller/SessionController';

import authentication from './app/middleware/authentication';

const routes = new Router();

routes.get('/', (req, res) => res.json({ messagem: 'Rota Raiz da Aplicação' }));

routes.post('/login', SessionController.store);
routes.post('/user', UserController.store);

routes.use(authentication);
routes.put('/user', UserController.update);

export default routes;
