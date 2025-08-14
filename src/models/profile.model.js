import sequelize from "../config/database.js";
import { DataTypes, ForeignKeyConstraintError, Op } from "sequelize";
import UserModel from "./user.model.js";

const ProfileModel = sequelize.define("Profile", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
});

export default ProfileModel;

//! Relacion de uno a uno, se crea la relacion en el modelo que depende del otro

ProfileModel.hasOne(UserModel, { foreignKey: "user_id", as: "user" });

UserModel.hasOne(ProfileModel, { foreignKey: "profile_id", as: "profile" });
