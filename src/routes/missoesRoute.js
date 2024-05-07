import missoesController from '../controllers/missoesController';

export default (app) => {
  app.get('/missoes', missoesController.get);
  app.get('/missoes/:id', missoesController.get);
  app.post('/missoes', missoesController.create);
  app.patch('/missoes/:id', missoesController.update);
  app.delete('/missoes/:id', missoesController.destroy);
};
