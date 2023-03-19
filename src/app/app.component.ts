import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemTodo, TodoService, Users, UsersService } from 'src/api';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'amitalTestPro';
  constructor(private fb: FormBuilder,
    private usersService: UsersService,
    private todoService: TodoService) {
    
  }
  
  AddItemForm = this.fb.group({   
    id:0, 
    description: ['', [Validators.required]],
    done:[false],
    userId: [0],
    
    fullName:''
  });

  users:Users[] = [];
  itemTodo:ItemTodo[] = [];
  itemTodo1!:ItemTodo;

  ngOnInit(): void {
    console.log('ngOnInit user list');
    this.loadUserList();
  }
  saveItem(){
    if (this.AddItemForm.valid) {
    console.log('saveItem', this.AddItemForm.value);
    this.todoService.getSumOfTaskByUserId(this.AddItemForm.value.userId!).subscribe({
      next: (res) => {
        if(res>10){
          alert("לא ניתן להוסיף יותר מ 10 משימות למשתמש")
        }else{
          console.log('realyGo to save',this.AddItemForm.value);
          this.itemTodo1={

            description:this.AddItemForm.value.description,
            userId:Number(this.AddItemForm.value.userId),
            done:Boolean(this.AddItemForm.value.done),
            id:0,
            fullName:''

          }
         
          console.log('after save',this.itemTodo1);
          
          this.todoService.addTask(this.itemTodo1).subscribe({
            next: (res) => {
              this.itemTodo = res;
              console.log(res);
            },
            error: (e) => console.error(e),
      
          })
        }
      },
      error: (e) => console.error(e),

    })
    
    }
  }
  loadUserList() {
    this.usersService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
        console.log(res);
      },
      error: (e) => console.error(e),

    })
    
  }

}
