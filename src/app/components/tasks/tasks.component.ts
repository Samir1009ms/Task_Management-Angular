import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { UserModel } from '../../models/user.model';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks!: TaskModel[];
  users!: UserModel[];

  displayedColumns: string[] = [
    '_id',
    'title',
    'description',
    'assignedTo',
    'action',
  ];

  constructor(
    private userService: UserService,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res;
      this.getUSers();
    });
  }
  getUSers() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      this.userNames();
    });
  }



  userNames() {
    this.tasks.forEach((task) => {
      const user = this.users.find((user) => {
        user._id === task.assignedTo._id;
      });
      task.assignedTo._id = user ? user?.name : 'no name';
    });
  }





    deleteTask(id: string) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.getTasks()
      })
    }


  goTo(){
    this.router.navigate([' /add-task'])
  }
}
