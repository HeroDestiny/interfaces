import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // Add this line

export interface Dado {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private apiUrl = 'https://3.128.249.166:3000/clients';
  dados: string[] = [];

  constructor(private http: HttpClient) { }

  getDados(): Observable<Dado[]> {
    return this.http.get<Dado[]>(this.apiUrl);
  }

  addDado(newDado: string): void {
    if (newDado.trim()) {
      this.dados.push(newDado.trim());
    }
  }
}
