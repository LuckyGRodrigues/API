import comunicacaoController from '../controllers/comunicacaoController';

export default (app) => {
  app.get('/comunicacao', comunicacaoController.get);
  app.get('/comunicacao/:id', comunicacaoController.get);
  app.post('/comunicacao', comunicacaoController.create);
  app.patch('/comunicacao/:id', comunicacaoController.update);
  app.delete('/comunicacao/:id', comunicacaoController.destroy);
};
