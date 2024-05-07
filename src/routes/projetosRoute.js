import projetosController from '../controllers/projetosController';

export default (app) => {
  app.get('/projetos', projetosController.get);
  app.get('/projetos/:id', projetosController.get);
  app.post('/projetos', projetosController.create);
  app.patch('/projetos/:id', projetosController.update);
  app.delete('/projetos/:id', projetosController.destroy);
};
