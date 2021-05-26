import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Storage } from '@ionic/storage';
import { UserServiceService } from '../../services/user-service.service';
import { MsgService } from '../../services/msg.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-endereco-add',
  templateUrl: './endereco-add.page.html',
  styleUrls: ['./endereco-add.page.scss'],
})
export class EnderecoAddPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
