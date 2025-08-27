const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./user");

const Expense = sequelize.define("Expense", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,   // ✅ stores only date (YYYY-MM-DD)
    allowNull: false,
    defaultValue: DataTypes.NOW, // auto-sets today if not provided
  },
});

// Relations
Expense.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Expense, { foreignKey: "userId" });

module.exports = Expense;
