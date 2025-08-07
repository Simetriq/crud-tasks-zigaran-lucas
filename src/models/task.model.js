import { DataTypes } from "sequelize";

const tasks_users_db = sequelize.define("tasks_users_db", {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false,
  },
});
