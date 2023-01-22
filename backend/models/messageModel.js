import { Sequelize } from "sequelize";
import db from "../config/dbconfig.js";

const { DataTypes } = Sequelize;

const Message = db.define('messages',{
    title: {type: DataTypes.STRING, allowNull: false},
    body: {type: DataTypes.STRING, allowNull: false}
})

export default Message