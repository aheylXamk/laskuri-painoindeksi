import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pituus : number;

  paino : number;

  indeksi : string;

  indeksiII : string;

  virhe : string;

  laskePainoindeksi = () : any => {

    if (this.pituus >= 100 && this.pituus < 230  && this.paino >= 30 && this.paino < 230) {

      this.virhe = "";
      this.indeksi = "";
      this.indeksiII = "";

    let lasku = this.paino /((this.pituus / 100)*(this.pituus / 100));

    
    
    if (lasku >= 15 && lasku < 18.4) {
      this.indeksiII = "Painoindeksisi on: " + lasku.toFixed(2) + ",\n\n" +"alhainen paino.";
    } 
    
    else if (lasku >= 18.4 && lasku < 24.9) {
      this.indeksi = "Painoindeksisi on: " + lasku.toFixed(2) + ",\n\n" +"normaali paino.";
    } 
    
    else if (lasku >= 24.9 && lasku < 29) {
      this.indeksiII = "Painoindeksisi on: " + lasku.toFixed(2) + ",\n\n" +"lievä ylipaino.";
    } 
    
    else {
      this.indeksiII = "Painoindeksisi on: " + lasku.toFixed(2) + ",\n\n" +"merkittävä ylipaino.";
    }

  } else {
    this.virhe = "Syöttötiedoissa on virhe. Käytä ainoastaan numeerisia arvoja väliltä 100-230 cm ja 30-230 kg";
  }

}


  } 

