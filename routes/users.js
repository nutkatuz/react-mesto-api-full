const userRouter = require('express').Router();
const {
  getUsers,
  getUser,
  editUser,
  editUserAvatar,
  login,
  createUser,
} = require('../controllers/users.js');

userRouter.get('/users', getUsers);
userRouter.get('/users/:_id', getUser);
userRouter.patch('/users/me', editUser);
userRouter.patch('/users/me/avatar', editUserAvatar);
// удалите обработчик создания пользователя — он больше не нужен
// userRouter.post('/users', createUser);
userRouter.post('/signin', login);// для логина.контроллер login
userRouter.post('/signup', createUser);// для регистрации.контроллер createUser
userRouter.get('/users/me', createUser);// для получения информации о залогиненном пользователе

module.exports = userRouter;
