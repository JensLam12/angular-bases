import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iron man';
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 29;
  }

  reset(): void {
    this.age = 45;
    this.name = 'iron man';

    // document.querySelectorAll( 'h1' )!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // })
  }
}
