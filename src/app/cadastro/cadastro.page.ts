import { CadastrosService } from '../services/cadastros.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cadastro } from '../models/Cadastro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  cadastro: Cadastro = new Cadastro();

  formCadastro = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    descricao: ['', Validators.required],
    validade: ['', Validators.required],
    preco: ['', Validators.required]
  });

  mensagensErro = {
    nome: [{ tipo: 'required', aviso: 'O campo está vazio' } , { tipo: 'nome', aviso: 'Nome incorreto'}],
    descricao: [{ tipo: 'required', aviso: 'O campo está vazio' }],
    validade: [{ tipo: 'required', aviso: 'O campo está vazio' } , { tipo: 'validade', aviso: 'Formato incorreto'}],
    preco: [{ tipo: 'required', aviso: 'O campo está vazio' } , { tipo: 'preco', aviso: 'Formato incorreto'}],
  };

  constructor(private formBuilder: FormBuilder, private route: Router, private cadastroService: CadastrosService) { }

  get nome() {
    return this.formCadastro.get('nome');

  }

  get descricao() {
    return this.formCadastro.get('descricao');

  }

  get validade() {
    return this.formCadastro.get('validade');

  }

  get preco() {
    return this.formCadastro.get('preco');

  }

  ngOnInit(): void { }

  async salvar() {
    if (this.formCadastro.valid) {
      this.cadastro.nome = this.formCadastro.get('nome').value;
      this.cadastro.descricao = this.formCadastro.get('descricao').value;
      this.cadastro.validade = this.formCadastro.get('validade').value;
      this.cadastro.preco = this.formCadastro.get('preco').value.replace(',',',');

      const id = (await this.cadastroService.buscarID()) as number;
      this.cadastro.id = id;

      this.cadastroService.salvar(this.cadastro);

      alert('Sucesso!');

      this.cadastroService.salvarID(id + 1);

      this.route.navigateByUrl('/tabs/tab1');
    } else {
      alert('Formulario Invalido');
    }
  }

}
