/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken';
import usuarioModel from '../models/usuarioModel';

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization || null;
    if (!token || token === 'bearer') {
      return res.status(401).send({
        message: 'Não autorizado',
      });
    }

    const [_, tokenLimpo] = token.split(' ');

    const decodedToken = jwt.decode(tokenLimpo, process.env.SECRET_KEY);
    if (!decodedToken) {
      return res.status(401).send({
        message: 'Token expirado , faça login',
      });
    }

    if (decodedToken.exp < (Date.now() / 1000)) {
      return res.status(401).send({
        message: 'Nope',
      });
    }
    const cargo = await usuarioModel.findOne({
      where: {
        id: decodedToken.userId,
      },
    });
    if (!cargo) {
      return res.status(401).send({
        message: 'Não existe',
      });
    }

    if (cargo.cargo.toLowerCase() !== 'ademiro') {
      return res.status(401).send({
        message: 'cargo inválido',
      });
    }
    next();
  } catch (error) {
    return res.status(401).send({
      message: 'errou',
    });
  }
  return 0;
};
