const express = require('express');       // Ce fichier(server.js) sera notre entrée à l'application express.
const cors = require('cors');

const app = express();        // On initilise une application Express.
app.use(express.json());      // On s'assure que notre serveur peut traiter les requêtes JSON.
app.use(cors());             // On utilise CORS pour permettre les requêtes cross-origin. On va permettre à notre frontend de communiquer avec notre backend. Ainsi par exemple, si notre frontend est sur http://localhost:3000 et notre backend sur http://localhost:5000, on doit configurer CORS pour autoriser les requêtes entre ces deux domaines.


