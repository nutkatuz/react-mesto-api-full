// авторизационный мидлвэр для проверки JWT. для авторизации/ должен верифицировать токен из заголовков.
// OK- мидлвэр должен добавлять пейлоуд токена в объект запроса и вызывать next - пропускает запрос дальше.:
// req.user = payload;

const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = process.env;
const jwtSign = require('../helpers/jwt-sign')

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }

  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'admin-secret');
  } catch (err) {
    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  next(); // пропускаем запрос дальше
};
