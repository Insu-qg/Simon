import express from "express";



const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const currentDate = new Date();
    res.json({ currentDate: currentDate });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
