import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesName:string[] = ['Spiderman','Iroman','Hulk','She hulk', 'Thor']
  public deletedHeroe?:string;
  deletePopHeroe():void{
    this.deletedHeroe = this.heroesName.pop();
  }
}
