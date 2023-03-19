import { Component, OnInit } from '@angular/core';
import { ItemTodo, TodoService } from 'src/api';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  itemTodo!: ItemTodo[]

  constructor(private dataService: DataService,private todoService: TodoService) { }
  

  ngOnInit(): void {
    this.loadItemTodo()
    this.dataService.RefreshRquired.subscribe(res=>{
      this.loadItemTodo()
    })
  }
  loadItemTodo(){

    this.todoService.getTaskList().subscribe(itemTodo =>{
      this.itemTodo= itemTodo;
    });


  }

}
