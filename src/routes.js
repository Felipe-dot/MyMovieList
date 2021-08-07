import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.post('/user', async (req, res) => {
  const user = await User.create({
    name: 'Luis Felipe de Azevedo Melo',
    nickname: 'Felipe',
    email: 'felipeluis@gmail.com',
    password_hash: '123456',
  });
  res.json(user);
});

routes.get('/', (req, res) => res.json({ mensagem: 'hello world' }));

export default routes;
