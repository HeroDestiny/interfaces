import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask(){
    if(this.newTask.trim()!== ''){
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index: number){
    this.tasks.splice(index, 1);
  }
  
}
