import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

console.log(uuid());


import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 9000
    }
  ]

  addCharacter( character: Character ) : void {

    const newCharacter: Character = { id:uuid(), ...character }

    // console.log('MainPage');
    // console.log(newCharacter);
    this.characters.push(newCharacter);
  }
  // onDeleteCharacter( character: number ) : void{
  //   this.characters.splice(character,1);
  //   console.log(character);
  // }
  deleteCharacterById( id:string ){
    this.characters = this.characters.filter( character => character.id !== id )
  }

}
