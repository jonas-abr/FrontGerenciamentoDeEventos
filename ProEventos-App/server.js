const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/ProEventos-App'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/ProEventos-App/inedx.html');
});

app.listen(PORT, () => {
    console.log('Sertvidor iniciado na porta ' + PORT);
})