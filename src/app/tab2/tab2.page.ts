import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Historico } from '../models/Historico';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  public historicos: Historico[] = [
    {datahora: "25/06/2020 18:53", leitura: "Leitura 1"},
    {datahora: "26/06/2020 19:53", leitura: "Leitura 2"},
    {datahora: "25/06/2020 20:53", leitura: "Leitura 3"},
    {datahora: "25/06/2020 21:53", leitura: "Leitura 4"},
    {datahora: "26/06/2020 12:32", leitura: "Leitura 5"},
    {datahora: "25/06/2020 13:21", leitura: "Leitura 6"},

  ];

  constructor(router: Router) {}
}
