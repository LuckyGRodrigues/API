import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const usuarioModel = sequelize.define(
  'usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    login: {
      field: 'log_in',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    passwordHash: {
      field: 'password_hash',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataNascimento: {
      field: 'data_nascimento',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    papel: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pontosXp: {
      field: 'pontos_xp',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nivel: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    credito: {
      field: 'creditos',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cargo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default usuarioModel;
