module.exports = (sequelize, dataTypes) => {
    const Contact = sequelize.define('Contact', {
        name: dataTypes.STRING,
        phone: dataTypes.STRING,
        email: dataTypes.STRING,
        userId: dataTypes.INTEGER

    })
    Contact.associate = function (models) {
        Contact.belongsTo(models.Users, { foreignKey: 'userId', as: ' user' })
    }
    return Contact;
}