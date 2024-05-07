import saudeBemEstarController from '../controllers/saudeBemEstarController';

export default (app) => {
  app.get('/saude-bem-estar-controler', saudeBemEstarController.get);
  app.get('/saude-bem-estar-controler/:id', saudeBemEstarController.get);
  app.post('/saude-bem-estar-controler', saudeBemEstarController.create);
  app.patch('/saude-bem-estar-controler/:id', saudeBemEstarController.update);
  app.delete('/saude-bem-estar-controler/:id', saudeBemEstarController.destroy);
};
