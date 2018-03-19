module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("burgers", {
        //constraints
        //and columns
        burger_name: DataTypes.STRING,
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultvalue: false
        }
    });

    return Burger;
}