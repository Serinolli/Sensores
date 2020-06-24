import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Historico } from '../models/Historico';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(private storage: Storage) {}

  
  public async salvar(historico: Historico) {
  if (historico.resultado){
  await this.storage.set(historico.resultado, historico);
  return true;
} else {
  return false;
    }
  }

  public async busca(resultado){
    let historico: Historico;
    await this.storage.get(resultado).then(valor=> {
      historico = valor;
    });
    return historico;
  }

  public async buscarTodos(){
    let historicos = [];
    return await this.storage.forEach((valor, chave, i) => {
      historicos.push(valor);
    }).then(() => {
      return historicos;
    }).catch(() => {
      historicos = [];
    });
  }

  public async excluir(resultado) {
    return await this.storage.remove(resultado);
  } 
}
