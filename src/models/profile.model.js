import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import UserModel from "./user.model.js";

const ProfileModel = sequelize.define(
  "profile",
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
  },
  {
    // timestamps: false,
    paranoid: true,
  }
);

export default ProfileModel;

//! Relacion de uno a uno, se crea la relacion en el modelo que depende del otro

ProfileModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

UserModel.hasOne(ProfileModel, { foreignKey: "user_id", onDelete: "CASCADE" });
