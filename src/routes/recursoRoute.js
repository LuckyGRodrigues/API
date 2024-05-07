import recursoController from '../controllers/recursoController';

export default (app) => {
  app.get('/recurso', recursoController.get);
  app.get('/recurso/:id', recursoController.get);
  app.post('/recurso', recursoController.create);
  app.patch('/recurso/:id', recursoController.update);
  app.delete('/recurso/:id', recursoController.destroy);
};
