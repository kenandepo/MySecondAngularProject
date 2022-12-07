import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todos', // by this selector value, you can use this component in other components
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // @ts-ignore
  todos;


  constructor() {
  }

  ngOnInit(): void {
    this.todos = [
      {content: 'First todo', completed: false},
      {content: 'Second todo', completed: true}
    ]
  }

  toggleDone(id: number) {
    // @ts-ignore
    this.todos.map((v, i) => {
      if (i == id)
        v.completed = !v.completed;
      return v;
    })
  }

  deleteToto(id: number) {
    // @ts-ignore
    this.todos = this.todos.filter((v, i) => i !== id);
  }

}
