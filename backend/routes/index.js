const router = require('express').Router();
const userRouter = require('./users');
const cardsRouter = require('./cards');
const authRouter = require('./auth');
const notFoundRouter = require('./not_found');

router.use(
  userRouter,
  cardsRouter,
  authRouter,
  notFoundRouter,
);

module.exports = router;
