"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const permission_1 = require("./permission");
class Users extends sequelize_1.Model {
}
exports.Users = Users;
Users.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    idPermission: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Permission',
            key: 'id'
        }
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "users",
    timestamps: false
});
permission_1.Permission.hasOne(Users, { foreignKey: "idPermission" });
