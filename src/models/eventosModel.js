import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import habitacaoModel from './habitacaoModel';

const eventosModel = sequelize.define(
  'eventos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataEvento: {
      field: 'data_evento',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    localEvento: {
      field: 'local_evento',
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

eventosModel.belongsTo(habitacaoModel, {
  as: 'habitacoes',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_habitacoes',
    name: 'idHabitacao',
    allowNull: false,
  },
});

export default eventosModel;
