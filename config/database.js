const databaseConnection = {
    dialect: 'postgres', 
    host: 'localhost',
    username: 'postgres',
    password: 'password',
    database: 'caf_api',
    define : {
        timestamp: true,
        underscored: true,  
    },
      
}

export default databaseConnection; 