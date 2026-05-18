import { Component, OnInit, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  title = signal('Franco');

  conta=signal(0);

  // Somma1() {
  //   this.conta++;
  //   console.log(this.conta);
  // }

  ngOnInit(): void {
    // console.log(this.title());
    // this.conta.update((n) => n+1);
    // this.title.set("Pippo");
    // console.log(this.title());
    // // setInterval(() => this.Somma1(),1000);
    // setInterval(() => {
    //   let num = this.conta();
    //   num = num+1;
    //   this.conta.set(num);
    //   console.log(this.conta());
    // },1000);
  }
}
