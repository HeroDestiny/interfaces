import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private dados: string[] = ['Primeiro', 'Segundo', 'Terceiro'];

  getDado(): string[] {
    return this.dados;
  }

  addDado(newDado: string): void {
    if (newDado.trim()) {
      this.dados.push(newDado.trim());
    }
  }
}
