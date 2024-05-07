import eventosController from '../controllers/eventosController';

export default (app) => {
  app.get('/eventos', eventosController.get);
  app.get('/eventos/:id', eventosController.get);
  app.post('/eventos', eventosController.create);
  app.patch('/eventos/:id', eventosController.update);
  app.delete('/eventos/:id', eventosController.destroy);
};
