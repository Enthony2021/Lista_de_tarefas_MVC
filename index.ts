import express, {Express} from "express";
import { engine } from "express-handlebars";
import taskRoutes from "./routes/tasksRoutes";
require("dotenv").config();


class App {
  app: express.Application;
  static port?: number = Number(process.env.SERVER_PORT);

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
    this.app.engine("handlebars", engine());
    this.app.set("view engine", "handlebars");
    this.app.set('views', './views');
  }

  routes() {
    this.app.use("/tasks", taskRoutes);
  }
}

export default new App().app;
export {App};