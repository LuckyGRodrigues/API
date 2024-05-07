import habitacaoController from '../controllers/habitacaoController';

export default (app) => {
  app.get('/habitacao', habitacaoController.get);
  app.get('/habitacao/:id', habitacaoController.get);
  app.post('/habitacao', habitacaoController.create);
  app.patch('/habitacao/:id', habitacaoController.update);
  app.delete('/habitacao/:id', habitacaoController.destroy);
};
