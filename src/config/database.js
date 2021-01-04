module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'sequelizeDB',
  define: {
    timestamps: true,
    // underscored: true,
  }
};