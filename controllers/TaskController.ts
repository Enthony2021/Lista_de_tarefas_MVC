import Task from "../models/Task";
import { Request, Response } from "express";
import iTask from "../models/iTask";

export default class TaskController {
  static createTask(req: Request, res: Response): void {
    res.render("tasks/create");
  }

  static async createTaskSave(req: Request, res: Response): Promise<void> {
    const task: iTask = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    };

    try {
      await Task.create(task);
      res.redirect("/tasks");
    } catch (error) {
      console.log(error);
    }
  }

  static async removeTask(req: Request, res: Response): Promise<void> {
    const id: string = req.body.id;
    try {
      await Task.destroy({ where: { id: id } });
      res.redirect("/tasks");
    } catch (error) {
      console.log(error);
    }
  }

  static async updateTask(req: Request, res: Response): Promise<void> {
    const id: string = req.params.id;

    try {
      const task = await Task.findOne({ where: { id: id }, raw: true });
      res.render("tasks/edit", { task });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateTaskPost(req: Request, res: Response): Promise<void> {
    const id: string = req.body.id;

    const task = {
      title: req.body.title,
      description: req.body.description,
    };

    try {
      await Task.update(task, { where: { id: id } });
      res.redirect("/tasks");
    } catch (error) {
      console.log(error);
    }
  }

  static async toggleTaskStatus(req: Request, res: Response): Promise<void> {
    const id: string = req.body.id;

    const task = {
      done: req.body.done === "0" ? true : false,
    };

    try {
      await Task.update(task, { where: { id: id } });
      res.redirect("/tasks");
    } catch (error) {
      console.log(error);
    }
  }

  static async showTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await Task.findAll({ raw: true });
      res.render("tasks/all", { tasks });
    } catch (error) {
      console.log(error);
    }
  }
}
