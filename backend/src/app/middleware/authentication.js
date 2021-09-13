import jwt  from "jsonwebtoken";

const authentication = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    const [token] = authHeader.split(' ');

    if(!token) {
        return res.status(401).json({ error: 'authorization token not sent' });
    }

    try {
        const decode = await jwt.verify(token, "text");
        console.log(decode);
        req.userId = decode.id;
        req.nickname = decode.nickname;
        return next();
    } catch (err) {
        return res.status(401).json( {error: 'Invalid Token' });
    }
};

export default authentication;