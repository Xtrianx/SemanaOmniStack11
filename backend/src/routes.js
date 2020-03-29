//------ Importação Biblioteca ------------
const express = require('express');
//------ Importação Controllers ------------
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
//----- Rotas Session -----------------
routes.post('/sessions', SessionController.create);
//----- Rotas Profile -----------------
routes.get('/profile', ProfileController.index);
//----- Rotas Ongs --------------------
routes.get('/ongs', OngController.index );
routes.post('/ongs', OngController.create);
//----- Rotas Incidents --------------------
routes.get('/incidents', IncidentController.index );
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
//----- Exportar Rotas -----------------
module.exports = routes;
