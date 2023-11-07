import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Banco de Dados conectado com sucesso!');

} catch (err) {
    console.log(`Não foi possível conectar: ${err}`);
}

export default sequelize;