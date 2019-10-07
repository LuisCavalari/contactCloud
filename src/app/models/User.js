const bcrypt = require('bcrypt')
module.exports = (sequelize, dataTypes) => {
    const User  = sequelize.define('Users', {
        name: dataTypes.STRING,
        email: dataTypes.STRING,
        password_hash: dataTypes.STRING,
        password: dataTypes.VIRTUAL,
    }, {
        sequelize,
        hooks: {
            beforeSave: async function (user) {
                if (user.password)
                    user.password_hash = await bcrypt.hash(user.password, 8)
            }
        },
    
    } )
    User.associate = function(models){
        User.hasMany(models.Contacts,{ as: 'contact'})
    }
    return User
}