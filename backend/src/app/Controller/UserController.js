import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const { id, nickname, email } = await User.create(req.body);

    return res.json({ id, nickname, email });
  }

  async update(req, res) {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    if (!user.checkPassword(oldPassword)) {
      return res.status(401).json({ mensagem: 'Invalid password' });
    }

    const { id, nickname, email } = await user.update({ password: newPassword });

    return res.json({ id, nickname, email });
  }
}

export default new UserController();