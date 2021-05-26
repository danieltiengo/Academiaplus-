import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Endereco } from "../models/endereco";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    private http: HttpClient,
    private firedb:AngularFirestore
  ) { }

  pegaCEP(cep: string) {
    var local: string = "https://viacep.com.br/ws/" + cep + "/json";
    return this.http.get<Endereco>(local);
  }

  add(usuario:Endereco){
    return this.firedb.collection<Endereco>("enderecos").add(
      {
        
        bairro : usuario.bairro,
        cep: usuario.cep,
        logradouro : usuario.logradouro,
        localidade: usuario.localidade,
        uf: usuario.uf,
        complemento:usuario.complemento,
        numero: usuario.numero,
        erro: usuario.erro
      }
    )
  }

  getAll(){
    //return this.firedb.collection<User>("enderecos").valueChanges()
    return this.firedb.collection<Endereco>("enderecos").snapshotChanges()
    .pipe(
      map(dados =>
        dados.map(
          d => ({
            key: d.payload.doc.id, ...d.payload.doc.data()
          })
        )
      )
    )
  }

  get(key){
    return this.firedb.collection<Endereco>("enderecos").doc(key).valueChanges();
  }

  update(Endereco:Endereco, key:string){
    return this.firedb.collection<Endereco>("enderecos").doc(key).update(Endereco);
  }

  delete(key){
    return this.firedb.collection("enderecos").doc(key).delete();
  }
}

