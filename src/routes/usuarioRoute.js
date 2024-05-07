import usuarioController from '../controllers/usuarioController';
import verifyAdemiro from '../middleware/verifyAdemiro';

export default (app) => {
  app.get('/usuario', verifyAdemiro, usuarioController.get);
  app.get('/usuario/:id', verifyAdemiro, usuarioController.get);
  app.post('/usuario/register', verifyAdemiro, usuarioController.register);
  app.post('/usuario/login', usuarioController.loginFunciton);
  app.post('/usuario', verifyAdemiro, usuarioController.create);
  app.patch('/usuario/:id', usuarioController.update);
  app.delete('/usuario/:id', usuarioController.destroy);
};
