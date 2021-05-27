import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { EnderecoService } from '../../services/endereco.service';
import { MsgService } from '../../services/msg.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-endereco-add',
  templateUrl: './endereco-add.page.html',
  styleUrls: ['./endereco-add.page.scss'],
})
export class EnderecoAddPage implements OnInit {

 endereco: Endereco = new Endereco();
  key: string = null;

  constructor(
    private storage: Storage,
    // public alertController: AlertController,
    private enderecoService: EnderecoService,
    // public toastController: ToastController,
    protected msg: MsgService,
    private router: Router,
    private activadeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.key = this.activadeRouter.snapshot.paramMap.get('key');
    this.getendereco(this.key)
  }

  async getendereco(key) {
    if (key) {
      await this.enderecoService.get(key).subscribe(
        res => {
          this.endereco = res;
          return true;
        },
        error => {
          console.log("ERRO:", error);
          return false;
        }
      )
    }
  }

 

  salvar() {
    try {
      this.msg.presentLoading();
      if (this.key) {
        this.enderecoService.update(this.endereco, this.key).then(
          res => {
            console.log('Dados Salvos firebase...', res);
            this.msg.dismissLoading();
            this.msg.presentAlert('Alerta', 'Usuário atualizado.');
            this.endereco = new Endereco();
            this.router.navigate(['']);
          },
          error => {
            console.error("Erro ao salvar.", error);
            this.msg.dismissLoading();
            this.msg.presentAlert("Error", "Não foi possivel atualizar.");
          }
        )
      } else {
        this.enderecoService.add(this.endereco).then(
          res => {
            console.log('Dados Salvos firebase...', res);
            this.msg.dismissLoading();
            this.msg.presentAlert('Alerta', 'Usuário cadastrado.');
            this.endereco = new Endereco();
            this.router.navigate(['']);
          },
          error => {
            console.error("Erro ao salvar.", error);
            this.msg.dismissLoading();
            this.msg.presentAlert("Error", "Não foi possivel salvar.");
          }
        )
      }
    } catch (error) {
      console.error("Erro ao salvar.", error);
      this.msg.dismissLoading();
      this.msg.presentAlert("Error", "Não foi possivel conectar.");
    }

  }

  doRefresh(event) {
    console.log('Begin async operation');
    if (this.getendereco(this.key)) {
      //setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      //}, 2000);
    }
  }

}
