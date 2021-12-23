import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  in=""
  todo=[""]
  index=1
  form=false
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.todo.push(this.in)
    this.index+=1
    this.form=true
  }
  delete(li:any,index:any){
    this.todo.splice(index,1)
    this.index-=1
  }
}
