import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASE } from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  instrucao: string = 'Traduza a frase:'
  frases: Frase[] = FRASE
  rodada: number = 0
  rodadaAtual: Frase
  resposta: string = ''
  progresso: number = 0
  tentativas: number = 3

  constructor() { this.atualizarRodada() }

  atualizarRodada() {
    this.rodadaAtual = this.frases[this.rodada]
    this.resposta = ''
    console.log(this.rodadaAtual)
  }

  atualizarResposta(resposta: Event) {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  verificarResposta() {
    if (this.resposta === this.rodadaAtual.frasePtbr) {
      this.rodada++
      this.progresso += (100 / this.frases.length)
      if (this.progresso === this.frases.length) {

      }
      this.atualizarRodada()
    } else {
      this.tentativas--
      if (this.tentativas === -1) {
        alert('VocÊ não possui mais tentativas!')
      }
    }
  }

  ngOnInit(): void {
  }

}
