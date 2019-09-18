module.exports = (sequelize, type) => {
    return sequelize.define('Printer', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        ip_address: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        status: {
            type: type.ENUM('active', 'inactive'),
            defaultValue: 'inactive'
        }
    });
};