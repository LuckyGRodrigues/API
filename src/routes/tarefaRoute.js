import tarefaController from '../controllers/tarefaController';

export default (app) => {
  app.get('/tarefa', tarefaController.get);
  app.get('/tarefa/:id', tarefaController.get);
  app.post('/tarefa', tarefaController.create);
  app.patch('/tarefa/:id', tarefaController.update);
  app.delete('/tarefa/:id', tarefaController.destroy);
};
