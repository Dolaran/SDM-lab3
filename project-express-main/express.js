// Підключення необхідних модулів
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Створення екземпляра додатку Express
const app = express();

// Встановлення парсера для JSON-даних
app.use(bodyParser.json());

// Маршрут GET '/'
app.get('/', (req, res) => {
  res.send('Привіт, світ!');
});

// Маршрут POST '/api/users'
app.post('/api/users', (req, res) => {
  // Отримання даних з тіла запиту
  const { name, email } = req.body;

  // Виконання дій залежності axios
  axios.post('https://example.com/api/users', { name, email })
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.status(500).json({ error: 'Помилка при створенні користувача' });
    });
});

// Порт, на якому запускається сервер
const port = 3000;

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на порті ${port}`);
});