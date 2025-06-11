const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware для обработки JSON
app.use(bodyParser.json());

// Обработка POST-запроса на /register
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Базовая валидация на сервере
    if (!username || !password) {
        return res.status(400).json({ error: 'Имя пользователя и пароль обязательны' });
    }

    // Формируем HTML-страницу для отображения данных
    const htmlResponse = `
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Данные регистрации</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background: linear-gradient(135deg, #a8e063, #56ab2f);
                }
                .container {
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                    width: 350px;
                    text-align: center;
                }
                h2 {
                    color: #2e7d32;
                    margin-bottom: 20px;
                    font-size: 24px;
                }
                .data-field {
                    margin-bottom: 20px;
                    text-align: left;
                }
                .data-field label {
                    display: block;
                    margin-bottom: 5px;
                    color: #388e3c;
                    font-weight: bold;
                }
                .data-field p {
                    background-color: #e8f5e9;
                    padding: 10px;
                    border-radius: 5px;
                    margin: 0;
                    font-size: 16px;
                    word-break: break-all;
                }
                a {
                    display: inline-block;
                    padding: 12px;
                    background-color: #4caf50;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                    transition: background-color 0.3s;
                }
                a:hover {
                    background-color: #388e3c;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Данные регистрации</h2>
                <div class="data-field">
                    <label>Имя пользователя</label>
                    <p>${username}</p>
                </div>
                <div class="data-field">
                    <label>Пароль</label>
                    <p>${password}</p>
                </div>
                <a href="/">Вернуться к регистрации</a>
            </div>
        </body>
        </html>
    `;

    res.send(htmlResponse);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
