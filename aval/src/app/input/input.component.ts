import { Component } from '@angular/core';
import { DadosService } from './dados.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  newDado: string = '';

  constructor(private DadosService: DadosService) {}

  addDado() {
    this.DadosService.addDado(this.newDado);
    this.newDado = '';
  }

  get items(): string[] {
    return this.DadosService.getDado();
  }
}

