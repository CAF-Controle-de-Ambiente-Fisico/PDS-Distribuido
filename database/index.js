import Sequelize from 'sequelize'; 
import dbConfig from '../config/database'
import User from '../models/User';
import Token from '../models/Token';

const Connection = new Sequelize(dbConfig);

User.init(Connection);
Token.init(Connection);

export default Connection;