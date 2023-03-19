import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemTodo, TodoService, Users, UsersService } from 'src/api';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemTodol!: ItemTodo;

  users:Users[] = [];
   itemTodo:ItemTodo[] = [];

  constructor(private fb: FormBuilder,
    private usersService: UsersService,
    private todoService: TodoService) {
    
  }
  AddItemForm = this.fb.group({   
    id:0, 
    description: [''],
    done:[false],
    userId: [0],
    
    fullName:''
  });

  ngOnInit(): void {
    this.loadUserList()

    this.AddItemForm.patchValue({
      description: this.itemTodol.description,
      done: this.itemTodol.done,
      userId: this.itemTodol.userId,
      fullName:this.itemTodol.fullName
    })
  }

  loadUserList() {
   
    this.usersService.getAllUsers().subscribe(
      (successResponse) => {
        this.users = successResponse;
        console.log(successResponse);
       },
      (errorResponse) => {
        console.log(errorResponse);
      });
  }

}
