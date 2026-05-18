import { Component, OnInit, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root', // sarebbe il tag e mi dice il nome del selettore
  imports: [ HomeComponent], //questa serve all'html
  templateUrl: './app.html', //qual'è html collegato app root
  styleUrl: './app.css' // qual'è foglio di stile collegato ad app root
})
export class App implements OnInit{  // classe insieme dei codici associati a questo selettore
//protected readonly title = signal('Sara'); // dice qual'è il codice che viene eseguito
  title = signal('Sara');
  conta = signal(0);

  //Somma1(){ //incrementa somma di 1 e poi lo stampa
    //this.conta++;
    //console.log(this.conta);
  //}

//Funzione(elenco, parametri) {
  //corpo della funzione
  //eventuale return
//}

//Somma(num1: number, num2:number):number {
  //return num1 + num2;
//}



//chiamata quando una pagina è pronta, e quando viene chiamata questa funzione, viene eseguito il codice che c'è dentro
  ngOnInit(): void {
   // console.log(this.title());
    //this.title.set("Pippo");
    //console.log(this.title());

//set interval è una funzione
    //setInterval(() => this.Somma1(),1000); // ogni 1000 millisecondi, viene chiamata la funzione somma1 
   //quando la pagina viene creata esegui il metodo somma1
    
    //setInterval(() => {
      //this.conta++;
      //this.conta.update((n)=>n+1);
      //let num = this.conta();
      //num = num + 1;
      //this.conta.set(num); //conta prima valeva 100 ora 101
     // console.log(this.conta());
   // },1000);
  }
}
