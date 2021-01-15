import {Model, DataTypes} from 'sequelize'; 

class Token extends Model {
    static init(sequelize){
        super.init({
            alphanumeric: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

export default Token; 