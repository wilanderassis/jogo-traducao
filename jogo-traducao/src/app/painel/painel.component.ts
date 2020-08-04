import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  @Output() encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { this.atualizarRodada() }

  atualizarRodada() {
    this.rodadaAtual = this.frases[this.rodada]
    this.resposta = ''
  }

  atualizarResposta(resposta: Event) {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  verificarResposta() {
    if (this.resposta === this.rodadaAtual.frasePtbr) {
      this.rodada++
      this.progresso += (100 / this.frases.length)
      if (this.rodada === this.frases.length) {
        this.encerrarJogo.emit('vitoria')
      }
      this.atualizarRodada()
    } else {
      this.tentativas--
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  ngOnInit(): void {
  }

}
