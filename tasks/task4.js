"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


const https = require('https');

function deleteUser(userId) {
    const options = {
        hostname: 'jsonplaceholder.typicode.com',
        path: `/users/${userId}`,
        method: 'DELETE'
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            resolve({ status: res.statusCode });
        });
        
        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}

deleteUser(1)
    .then(response => console.log(response))
    .catch(error => console.error(error));

module.exports = deleteUser;
