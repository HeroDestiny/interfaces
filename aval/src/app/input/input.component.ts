import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosService } from './dados.service';
import { Dado } from './interfaces/dado';
import { Post } from './interfaces/post';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  dados: Dado[] = [];
  estudanteForm: FormGroup;
  postForm: FormGroup;
  posts: Post[] = [];

  constructor(private fb: FormBuilder, private dadosService: DadosService) {
    this.estudanteForm = this.fb.group({
      matricula: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      estudanteId: [''],
    });
  }

  ngOnInit() {
    this.dadosService.getDados().subscribe((data: Dado[]) => {
      this.dados = data;
    });
  
    this.dadosService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts.map(post => ({
        ...post,
        dataHoraFormatada: new Date(post.date).toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      }));
    });
  }

  addDado() {
    if (this.estudanteForm.valid) {
      const novoDado: Dado = this.estudanteForm.value;
      this.dadosService.cadastrarDado(novoDado).subscribe(
        (response) => {
          console.log('Dado cadastrado com sucesso:', response);
          this.estudanteForm.reset();
        },
        (error) => {
          console.error('Erro ao cadastrar dado:', error);
        }
      );
    } else {
      console.error('Formulário inválido');
    }
  }

  addPost() {
    if (this.postForm.valid) {
      const novoPost: Post = {
        ...this.postForm.value,
        date: new Date(),
      };
      this.dadosService.cadastrarPost(novoPost).subscribe(
        (response) => {
          console.log('Post cadastrado com sucesso:', response);
          this.postForm.reset();
        },
        (error) => {
          console.error('Erro ao cadastrar post:', error);
        }
      );
    } else {
      console.error('Formulário de post inválido');
    }
  }

  deletePost(postId: string) {
    this.dadosService.deletePost(postId).subscribe(
      (response) => {
        console.log('Post deletado com sucesso:', response);
        this.posts = this.posts.filter((post) => post.id !== postId);
      },
      (error) => {
        console.error('Erro ao deletar post:', error);
      }
    );
  }
}
