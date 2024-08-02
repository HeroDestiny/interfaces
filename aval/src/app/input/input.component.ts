import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosService } from './dados.service';
import { Dado } from './interfaces/dado';
import { Post } from './interfaces/post';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  dados: Dado[] = [];
  estudanteForm: FormGroup;
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private dadosService: DadosService) {
    this.estudanteForm = this.fb.group({
      matricula: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.postForm = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],      
      estudanteId: ['']
    });
  }

  ngOnInit() {
    this.dadosService.getDados().subscribe((data: Dado[]) => {
      this.dados = data;
    });
  }

  addDado() {
    if (this.estudanteForm.valid) {
      const novoDado: Dado = this.estudanteForm.value;
      this.dadosService.cadastrarDado(novoDado).subscribe(response => {
        console.log('Dado cadastrado com sucesso:', response);
        this.estudanteForm.reset();
      }, error => {
        console.error('Erro ao cadastrar dado:', error);
      });
    } else {
      console.error('Formulário inválido');
    }
  }

  addPost() {
    if (this.postForm.valid) {
      const novoPost: Post = {
        ...this.postForm.value,
        dataHora: new Date()
      };
      this.dadosService.cadastrarPost(novoPost).subscribe(response => {
        console.log('Post cadastrado com sucesso:', response);
        this.postForm.reset();
      }, error => {
        console.error('Erro ao cadastrar post:', error);
      });
    } else {
      console.error('Formulário de post inválido');
    }
  }
}