const Sequelize = require("sequelize");
const db = new Sequelize(
  "tmdb",
  "bautista",
  "8ocTiM9TT0PCNYwc347r1Wx5HCYU7euS",
  {
    host: "dpg-cn3timqcn0vc738q8fcg-a",
    dialect: "postgres",
    logging: false,
  }
);

db.authenticate()
  .then(() => {
    console.log("Conexion exitosa a la base de datos", db.config.database);
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos", err);
  });
module.exports = db;
