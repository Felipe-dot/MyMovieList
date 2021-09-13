import User from '../models/User.js';

class UserController{
    async store(req, res) {
        const userExists = await User.findOne({ where: { email: req.body.email } });

        if(userExists) {
            return res.status(404).json({ message: 'User already exists'});
        }

        const { id, nickname, email} = await User.create(req.body);

        return res.json({id, nickname, email});
    }

    async update (req, res) {
        const { newNickname } = req.body;

        const user = await User.findByPk(req.userID);

        if(!user) {
            return res.status(404).json({ message: 'User does not exist'});
        }

        const { id, nickname, email } = await user.update({ nickname: newNickname });

        return res.json({ id, nickname, email });
    }
}

export default new UserController();