import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import usuarioModel from './usuarioModel';

const recursoModel = sequelize.define(
  'recursos',
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
    tipo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recurso: {
      field: 'recursos',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    unidadeMedida: {
      field: 'unidade_medida',
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    taxaRenovacao: {
      field: 'taxa_renovacao',
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

recursoModel.belongsTo(usuarioModel, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
    allowNull: false,
  },
});

export default recursoModel;
