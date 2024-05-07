import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import usuarioModel from './usuarioModel';

const missoesModel = sequelize.define(
  'missoes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    objetivo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recompensaXp: {
      field: 'recompensa_xp',
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    recompensaCredito: {
      field: 'recompensa_creditos',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataInicio: {
      field: 'data_inicio',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataFim: {
      field: 'data_fim',
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

missoesModel.belongsTo(usuarioModel, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
    allowNull: false,
  },
});

export default missoesModel;
