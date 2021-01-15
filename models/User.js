import {Model, DataTypes} from 'sequelize'; 

class User extends Model {
    static init(sequelize){
        super.init({
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

export default User; 