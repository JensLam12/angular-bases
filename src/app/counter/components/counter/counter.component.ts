import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
      <h3>Counter: {{counter}}</h3>
      <button (click)="increasedBy(1)" >+1</button>
      <button (click)="reset()" >reset</button>
      <button (click)="decreasedBy(1)" >-1</button>
    `
})
export class CounterComponent {
  public counter:number = 10;

  increasedBy( value:number ):void {
    this.counter += value;
  }

  decreasedBy(value:number):void {
    this.counter -= value;
  }

  reset():void {
    this.counter = 10;
  }
}
