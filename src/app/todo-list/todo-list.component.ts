import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  allTasks = [] as any;
  hidden = [] as any;
  taskInput = "";
  count = 0;
  hideCompleted = false;


  addTask(newReminder: HTMLElement){
    
    var task = (<HTMLInputElement>document.getElementById("newReminder")).value;
    this.count = this.count + 1;
    let reminder = {
      id: this.count,
      todo: task,
      done: false
    };

    this.allTasks.push(reminder);

    (<HTMLInputElement>document.getElementById("newReminder")).value = "";
  }

  isDone(reminder: any) {
    reminder.done ? reminder.done = false : reminder.done = true;
  }

  deleteReminder(reminder: any){
    this.allTasks = this.allTasks.filter((element: { id: any; }) => {
      return element.id !== reminder.id;
    })
  }

  showHideCompleted(event: MatSlideToggleChange) {
    event.checked ? this.hideCompleted = true : this.hideCompleted = false;
  }

  clearCompleted() {
    this.allTasks = this.allTasks.filter((element: { done: any; }) => {
      return element.done === false;
    })
  }
}
