// server.js (Node.js Backend)

const express = require('express');
const app = express();
const port = 3000;

// Örnek oyun verileri
const games = {
    easy: [{ id: 1, name: 'Kolay Oyun 1' }],
    medium: [{ id: 2, name: 'Orta Oyun 1' }],
    hard: [{ id: 3, name: 'Zor Oyun 1' }],
};

app.get('/api/games/:difficulty', (req, res) => {
    const { difficulty } = req.params;
    console.log(difficulty);
    if (games[difficulty]) {
        res.json(games[difficulty]);
    } else {
        res.status(404).json({ message: 'Oyun bulunamadı' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
