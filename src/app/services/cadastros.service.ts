import { Injectable } from '@angular/core';
import { Cadastro } from '../models/Cadastro.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  listaCadastros: Cadastro[] = [];

constructor(private storageService: StorageService) { }

async salvar(cadastro: Cadastro) {
  await this.buscarTodos();
  this.listaCadastros[cadastro.id] = cadastro;
  this.storageService.set('cadastros', this.listaCadastros);
}
async buscarUm(id: number) {
  await this.buscarTodos();
  return this.listaCadastros[id];
}

async buscarTodos() {
  this.listaCadastros = (await this.storageService.get('cadastros') as unknown as Cadastro[])
  if (!this.listaCadastros) {
    this.listaCadastros = [];
  }
  return this.listaCadastros
}

async deletar(id: number) {
  await this.buscarTodos();
  this.listaCadastros.splice(id, 1);
  this.storageService.set('cadastros', this.listaCadastros);
}

async salvarID(id: number) {
  this.storageService.set('idCadastro', id);
}
async buscarID() {
  const id = await this.storageService.get('idCadastro');
  if(!id) {
    return 0;
  }
  return id;
}

}
