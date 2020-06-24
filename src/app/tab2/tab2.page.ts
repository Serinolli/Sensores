import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoricoService } from '../services/historico.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Historico } from '../models/Historico';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(router: Router, historicoService: HistoricoService) {}
}
