import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Painel: boolean = true
  vitoriaOuDerrota: string

  encerrarJogo(tipo: string) {
    this.vitoriaOuDerrota = tipo
    this.Painel = false
  }

  reiniciarJogo() {
    this.vitoriaOuDerrota = undefined
    this.Painel = true
  }

}
