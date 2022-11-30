import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from '../models/Cadastro.model';
import { CadastrosService } from '../services/cadastros.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  listaCadastros: Cadastro[] = [];

  constructor(private produtoService: CadastrosService, private route: Router) {}

  async buscarProdutos(){
    this.listaCadastros = await this.produtoService.buscarTodos();
  }

  ngOnInit(): void {

  }

  ionViewWillEnter(){
    this.buscarProdutos();
  }
}
