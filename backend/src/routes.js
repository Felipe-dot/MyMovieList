import { Router } from 'express'; // importr apenas o Routers do express
import User from './app/models/User';

const routes = new Router();

routes.post('/user', async (req, res) => {
  const user = await User.create({
    nickname: 'CarlosEddie',
    email: 'dudu_carlos.eduardo@hotmail.com.',
    password_hash: '147852369',
  });
  res.json(user);
});

routes.get('/', (req, res) => res.json({ mensagem: 'hello world' }));

export default routes;
