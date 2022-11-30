/* eslint-disable no-underscore-dangle */

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // variavel storage, se instancia ela nula, deixa ela como nula
  private _storage: Storage | null = null;

  // trabalhar com o storage do ionic
  constructor(private storage: Storage) {
    // chama a função init na hora que o projeto for iniciado
    this.init();
  }

  async init() {
    // eslint-disable-next-line max-len
    /*  ela inicializa o banco de dados, caso ela não exista, ele cria o banco de dados, caso ele ja exista, ele apenas pega esse banco de dados para poder trabalhar com ele */

    const storage = await this.storage.create();
    this._storage = storage;
  }

  // normalmente a gente não sabe o tipo da informação para especificar o tipo, então usa o "Any"
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string){
   return this._storage?.get(key);
  }

  public remove(key: string){
    return this._storage?.remove(key);
   }

}
