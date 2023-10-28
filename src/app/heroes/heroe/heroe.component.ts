import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name:string = "iroman";
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHeroe(){
    this.name = "spiderman";
  }
  changeAge(){
    this.age = 25;
  }

  resetForm(){
    this.name = "iroman";
    this.age = 45;

  }
}
