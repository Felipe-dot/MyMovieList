import User from '../models/User.js';
import jwt from 'jsonwebtoken';

class SessionController{
    async store(req, res) {
        const{ email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if(!user) {
            return res.status(401).send({ error: 'User not found' });
        }

        if(!(await user.checkPassword(password))) {
            return res.status(401).send({ error: 'Invalid Password' });
        }

        const { id, nickname } = user;
        
        return res.json( {
            user: {
                id,
                nickname,
            },
            token: jwt.sign({ id }, "text", {
                expiresIn: '7d',
            }),
        });
    }
}

export default new SessionController();