const userRouter = require('express').Router();
const {
  login,
  createUser,
} = require('../controllers/users.js');
// удалите обработчик создания пользователя — он больше не нужен
// userRouter.post('/users', createUser);
userRouter.post('/signin', login);// для логина.контроллер login
userRouter.post('/signup', createUser);// для регистрации.контроллер createUser
