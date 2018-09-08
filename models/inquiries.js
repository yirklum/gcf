
module.exports = function(sequelize, DataTypes) {

    var Inquiries = sequelize.define("Inquiries", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        services: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false
        },

        date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // sequelize.sync();

    return Inquiries;
};