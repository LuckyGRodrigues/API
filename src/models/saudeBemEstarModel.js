import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import usuarioModel from './usuarioModel';

const saudeBemEstarModel = sequelize.define(
  'saude_bem_estar',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipoExame: {
      field: 'tipo_exame',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    resultado: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dataExame: {
      field: 'data_exame',
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

saudeBemEstarModel.belongsTo(usuarioModel, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_usuario',
    name: 'idUsuario',
    allowNull: false,
  },
});

export default saudeBemEstarModel;
