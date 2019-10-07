

module.exports = (sequelize, dataTypes) => {
    const Contact = sequelize.define('Contacts', {
        name: dataTypes.STRING,
        phone: dataTypes.STRING,
        email: dataTypes.STRING,
        UserId: dataTypes.INTEGER

    },{
        sequelize
    })
    Contact.associate = function (models) {
        Contact.belongsTo(models.Users, { foreignKey: 'UserId' , as:'user' })
    }
    return Contact;
}