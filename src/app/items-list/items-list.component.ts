import { Component, OnInit } from '@angular/core';
import { ItemTodo, TodoService } from 'src/api';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  itemTodo!: ItemTodo[]

  constructor(private todoService: TodoService) { }
  

  ngOnInit(): void {
    this.loadItemTodo()
  }
  loadItemTodo(){

    this.todoService.getTaskList().subscribe(itemTodo =>{
      this.itemTodo= itemTodo;
    })

  }

}
