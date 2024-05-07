import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import usuarioModel from './usuarioModel';

const habitacaoModel = sequelize.define(
  'habitacoes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    capacidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    integridadeEstrutural: {
      field: 'integridade_estrutural',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nivelSeguranca: {
      field: 'nivel_seguranca',
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    nivelOxigenio: {
      field: 'nivel_oxigenio',
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    nivelCo2: {
      field: 'nivel_co2',
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    temperatura: {
      type: DataTypes.FLOAT,
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

habitacaoModel.belongsTo(usuarioModel, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
    allowNull: false,
  },
});

export default habitacaoModel;
