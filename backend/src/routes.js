const { Router } = require('express');
const HeroinaController = require('./controllers/HeroinaController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/heroinas', HeroinaController.index);
routes.get('/heroinas/:id', HeroinaController.show);
routes.post('/heroinas', HeroinaController.store);
routes.put('/heroinas', HeroinaController.update);
routes.delete('/heroinas/:id', HeroinaController.destroy);

routes.get('/buscaPorFraquezas', SearchController.fraquezas);
routes.get('/buscaPorPoderes', SearchController.poderes);
routes.get('/buscaPorGrupos', SearchController.grupos);
routes.get('/buscarPorEditora', SearchController.editora);

module.exports = routes;