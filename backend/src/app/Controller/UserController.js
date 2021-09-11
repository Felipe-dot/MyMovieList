import User from '../models/User.js';

class UserController{
    async store(req, res) {
        const userExists = await User.findOne({ where: { email: req.body.email } });

        if(userExists) {
            return res.status(400).json({ message: 'User already exists'});
        }

        const { id, nickname, email} = await User.create(req.body);

        return res.json({id, nickname, email});
    }
}

export default new UserController();