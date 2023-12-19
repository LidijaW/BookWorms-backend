const express = require('express');
const app = express();
app.use(express.json());
const auth = require('./auth');


// Registracija
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await auth.register(username, password);
        res.json({ status: 'uspjeh', user });
    } catch (error) {
        res.status(400).json({ status: 'neuspjeh', error: error.message });
    }
});

// Oglasi
app.get('/ads', (req, res) => {
    res.json([{ id: 1, title: 'naslov', description: 'opis' }]);
});

// Oglasi po ID-u
app.get('/ads/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id: 1, title: 'naslov', description: 'opis' });
});

// Chat stranica
app.post('/chat', (req, res) => {
    const { sender, message } = req.body;
    res.json({ status: 'uspjeh' });
});

app.get('/chat', (req, res) => {
    res.json([{ sender: 'korisnicko_ime', message: 'poruka' }]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server pokrenut na portu ${port}`));



// Oglasi
app.get('/ads', (req, res) => {
    res.json([{ id: 1, title: 'naslov', description: 'opis' }]);
});

// Oglasi po ID-u
app.get('/ads/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id: 1, title: 'naslov', description: 'opis' });
});

// Chat stranica
app.post('/chat', (req, res) => {
    const { sender, message } = req.body;
    res.json({ status: 'uspjeh' });
});

app.get('/chat', (req, res) => {
    res.json([{ sender: 'korisnicko_ime', message: 'poruka' }]);
});

