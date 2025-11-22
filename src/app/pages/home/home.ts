import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home implements DoCheck {
incrementar() {
  this.num++;
}
   num: number = 1;



  ngDoCheck(): void {
    console.log('Uma mudança foi detectada no Home');
  }

  adciona1() {
    this.num++;
  }

}
