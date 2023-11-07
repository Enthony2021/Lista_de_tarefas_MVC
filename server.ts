// @ts-nocheck
import conn from './db/conn';
import app from './index';
import { App } from './index';
require("dotenv").config();

conn
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Servidor aberto: ${process.env.SERVER_LOCAL_ADRESS}${App.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });