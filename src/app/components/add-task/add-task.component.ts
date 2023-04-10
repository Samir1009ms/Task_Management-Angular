import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TaskService } from "../../services/task.service";
import { UserModel } from "../../models/user.model";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  users!: UserModel[];
  selected: string = ''

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  addTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
    assignedTo: ['', Validators.required],
  })

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: UserModel[]) => {
      this.users = users;
    })
  }

  submitForm() {
    if (this.addTaskForm.invalid ) {
      return;
    }

    // @ts-ignore
    this.taskService.addTask(this.addTaskForm.value).subscribe(() => {
      this.router.navigate(['/tasks'])
    })
  }
}
