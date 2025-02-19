const express = require('express');
const app = express();
const path = require('path');

// Servir les fichiers statiques
app.use('/static', express.static(path.join(__dirname, 'public')));

// Route API exemple
app.get('/api/hello', (req, res) => {
    res.json({
        message: 'Hello World!',
        path: '/home/alban/www/finance'
    });
});

app.listen(3000, () => {
    console.log('App running on port 3000');
});
