import { Component, OnInit } from '@angular/core';
import { DadosService } from './dados.service';
import { Dado } from './interfaces/dado';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  dados: Dado[] = [];
  newDado: string = '';

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.dadosService.getDados().subscribe((data: Dado[]) => {
      this.dados = data;
    });
  }

  addDado() {
    this.dadosService.addDado(this.newDado);
    this.newDado = ''; // Limpar o campo de entrada após adicionar
  }
}