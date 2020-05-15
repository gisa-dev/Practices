import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  title: string;


  constructor(private taskServices: TasksService) {
    this.taskServices.getTasks()
      .subscribe(tasks => {
        console.log(tasks);
        this.tasks = tasks;
      });
  }

  ngOnInit(): void {
  }

  addTask(event) {
    event.preventDefault();
    const newTask: Task = {
      title: this.title,
      isDone: false
    };

    this.taskServices.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      });
  }

  deleteTask(id) {
    const reponse = confirm('are you sure to delete it?');
    if (reponse) {
      const tasks = this.tasks;
      this.taskServices.deleteTask(id)
        .subscribe(data => {
          console.log(data.n);
          if (data.n == 1) {
            for (let i = 0; i < tasks.length; i++) {
              if (tasks[i]._id == id) {
                tasks.splice(i, 1);
              }
            }
          }
        });
    }
  }

  updateStatus(task: Task) {
    let newTask = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };
    this.taskServices.updateTask(newTask)
      .subscribe(res => {
        console.log(res);
        task.isDone = !task.isDone;
      });
  }

}
