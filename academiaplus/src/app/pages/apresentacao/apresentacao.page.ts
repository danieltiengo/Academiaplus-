import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.page.html',
  styleUrls: ['./apresentacao.page.scss'],
})
export class ApresentacaoPage implements OnInit {
 slideOpts = {
   initialSlide: 0,
  speed: 400
  };
  constructor() {}


ngOnInit() {

}


}