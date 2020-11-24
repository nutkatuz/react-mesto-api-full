const express = require('express');
const path = require('path');
const PORT = 4000;
const app = express();
const routes = require('./routes/index.js');
const mongoose = require('mongoose');
require('dotenv').config();

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// подключаем мидлвары, роуты и всё остальное...
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // нет сторонним пакетам

app.use((req, res, next) => { // временно вместо авторизации Удалён хардкод req.user из самостоятельного проекта предыдущих спринтов.
  req.user = { // Во время выполнения роутов объект req.user должен быть инициализирован.
    _id: '5f93590a3ea6942bc8a58414',
  };
  next();// централизованный обработчик ошибок
});

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use('/', routes);
app.listen(PORT, () => console.log(`App listening on port ${PORT}..`));
