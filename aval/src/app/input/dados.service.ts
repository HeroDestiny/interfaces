import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dado } from './interfaces/dado';
import { Post } from './interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  private apiUrl = 'https://3.128.249.166:3000/students';
  private postsUrl = 'https://3.128.249.166:3000/posts';
  dados: string[] = [];

  constructor(private http: HttpClient) {}

  getDados(): Observable<Dado[]> {
    return this.http.get<Dado[]>(this.apiUrl);
  }

  addDado(newDado: string): void {
    if (newDado.trim()) {
      this.dados.push(newDado.trim());
    }
  }

  cadastrarDado(dado: Dado): Observable<Dado> {
    return this.http.post<Dado>(this.apiUrl, dado);
  }

  cadastrarEstudante(
    matricula: string,
    nome: string,
    email: string
  ): Observable<Dado> {
    const estudante: Dado = { matricula, nome, email };
    return this.http.post<Dado>(this.apiUrl, estudante);
  }

  // Métodos para gerenciar posts
  cadastrarPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post);
  }

  getPostsByEstudanteId(estudanteId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}?estudanteId=${estudanteId}`);
  }
}
