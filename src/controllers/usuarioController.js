import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usuarioModel from '../models/usuarioModel';
import { sequelize } from '../config/config';

const get = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      const response = await usuarioModel.findAll({
        order: [['id', 'asc']],
      });
      return res.status(200).send({
        message: 'Dados Encontrados!',
        response,
      });
    }
    const response = await usuarioModel.findOne({
      where: {
        id,
      },
    });
    return res.status(200).send({
      message: 'Dados Encontrados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const {
      login, passwordHash, nome, email, dataNascimento, papel,
      pontosXp, nivel, credito, idInventario, cargo,
    } = req.body;

    const response = await usuarioModel.create({
      login,
      passwordHash,
      nome,
      email,
      dataNascimento,
      papel,
      pontosXp,
      nivel,
      credito,
      idInventario,
      cargo,
    });

    return res.status(201).send({
      message: 'Dados Criados!',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400).send({
        message: 'Id não informado',
        response: [],
      });
    }

    const response = await usuarioModel.findOne({
      where: {
        id,
      },
    });

    if (!response) {
      return res.status(500).send({
        message: 'Id Não Encontrado na Base',
        response: [],
      });
    }

    Object.keys(req.body).forEach((chave) => {
      response[chave] = req.body[chave];
    });

    await response.save();
    return res.status(201).send({
      message: 'Dados Atualizados',
      response,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
      return res.status(400).send({
        message: 'Id não informado',
        response: [],
      });
    }

    const response = await usuarioModel.findOne({
      where: {
        id,
      },
    });

    if (!response) {
      return res.status(500).send({
        message: 'Id Não Encontrado na Base',
        response: [],
      });
    }

    await response.destroy();
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
  return 0;
};

const register = async (req, res) => {
  try {
    const {
      login, password, nome, email, dataNascimento,
      papel, pontosXp, nivel, credito, cargo,
    } = req.body;
    const response = await usuarioModel.findOne({
      where: {
        login,
      },
    });

    if (response) {
      throw new Error('Username já foi utilizado');
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const resposta = await usuarioModel.create({
      login,
      passwordHash,
      nome,
      email,
      dataNascimento,
      papel,
      pontosXp,
      nivel,
      credito,
      cargo,
    });

    return res.status(201).send({
      message: 'Registro Criado Com sucesso!',
      data: resposta,
    });
  } catch (error) {
    return res.status(500).send({
      message: 'Ops!',
      response: error.message,
    });
  }
};

const loginFunciton = async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await usuarioModel.findOne({
      where: {
        login,
      },
    });
    if (!user) {
      throw new Error('Usuario ou senha inválidos!');
    }

    const { passwordHash } = user;
    const resposta = bcrypt.compare(password, passwordHash);
    if (resposta) {
      const token = jwt.sign({ userId: user.id, userName: user.nome }, process.env.SECRET_KEY, { expiresIn: '1h' });
      return res.status(200).send({
        token,
      });
    }

    return res.status(400).send({
      message: 'usuario ou senha invalidos!',
    });
  } catch (error) {
    return res.status(500).send({
    });
  }
};

const tioSam = async (req, res) => {
  const response = await sequelize.query(`
    select
      u.id,
      u.nome,
      s.tipo_exame,
      s.resultado,
      s.data_exame
    from usuario as u
    JOIN saude_bem_estar as s on s.id_usuario = u.id
  `).then((a) => a[0]);
  return res.status(201).send({
    message: 'Dados Encontrados!',
    response,
  });
};

const calanguinho = async (req, res) => {
  const response = await sequelize.query(`
    SELECT
      u.nome
    FROM usuario AS u
    JOIN recursos AS r ON r.id_usuario = u.id
    GROUP BY u.nome
    HAVING COUNT(r.id) > 4;
  `).then((a) => a[0]);
  return res.status(201).send({
    message: 'Dados Encontrados!',
    response,
  });
};

export default {
  get,
  create,
  update,
  destroy,
  register,
  tioSam,
  calanguinho,
  loginFunciton,
};
