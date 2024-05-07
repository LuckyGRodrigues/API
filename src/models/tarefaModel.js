import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import projetosModel from './projetosModel';

const tarefaModel = sequelize.define(
  'eventos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    prioridade: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dificuldade: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recompensa: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      field: 'data_evento',
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

tarefaModel.belongsTo(projetosModel, {
  as: 'projetos',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_projetos',
    name: 'idProjeto',
    allowNull: false,
  },
});

export default tarefaModel;
