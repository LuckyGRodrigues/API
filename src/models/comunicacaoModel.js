import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import usuarioModel from './usuarioModel';

const comunicacaoModel = sequelize.define(
  'comunicacoes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    importancia: {
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

comunicacaoModel.belongsTo(usuarioModel, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
    allowNull: false,
  },
});

export default comunicacaoModel;
