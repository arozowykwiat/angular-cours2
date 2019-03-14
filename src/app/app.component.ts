import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  			<div [hidden]='todos.length'>Aucun élément</div>
  			<ul>
  				<li *ngFor='let todo of todos;
  							let i = index;
  							let odd = odd'>
  					<hr *ngIf ='i'>
  					<a href="http://google.fr/#q={{todo}}"
  						target='_blank'>
  						{{todo}}
  					</a>
  				</li>
  			</ul>
  			<form (submit)='createTodo()'>
				<input type='text' name='todoLabel'  [(ngModel)]='newTodo'/>
  			</form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Ma Todo List";
  todos : string[] =  [];
  newTodo : string ='';
  createTodo() {
  	if (this.newTodo){
  		this.todos.push(this.newTodo);
  		this.newTodo='';
  	}
  }
}
