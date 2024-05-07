import habitacaoRoute from './habitacaoRoute';
import usuarioRoute from './usuarioRoute';
import eventosRoute from './eventosRoute';
import missoesRoute from './missoesRoute';
import projetosRoute from './projetosRoute';
import tarefaRoute from './tarefaRoute';
import comunicacaoRoute from './comunicacaoRoute';
import saudeBemEstarRoute from './saudeBemEstarRoute';
import recursoRoute from './recursoRoute';

function Routes(app) {
  usuarioRoute(app);
  habitacaoRoute(app);
  eventosRoute(app);
  missoesRoute(app);
  projetosRoute(app);
  tarefaRoute(app);
  comunicacaoRoute(app);
  saudeBemEstarRoute(app);
  recursoRoute(app);
}

export default Routes;
