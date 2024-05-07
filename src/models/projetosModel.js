import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import usuarioModel from './usuarioModel';

const projetosModel = sequelize.define(
  'projetos',
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    custo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    xpRecompensa: {
      field: 'xp_recompensa',
      type: DataTypes.FLOAT,
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

projetosModel.belongsTo(usuarioModel, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
    allowNull: false,
  },
});

export default projetosModel;
