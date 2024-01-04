import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as UUID } from 'uuid';

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [
    {
      id: UUID(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: UUID(),
      name: 'Goku',
      power: 9500
    },
    {
      id: UUID(),
      name: 'Vegeta',
      power: 9500
    }
  ]

  addCharacter( character: Character): void {
    const newCharacter: Character = { id: UUID(), ...character };
    this.characters.push( newCharacter );
  }

  onDeleteCharacter( index: number ): void {
    this.characters.splice( index, 1 );
  }

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

}
