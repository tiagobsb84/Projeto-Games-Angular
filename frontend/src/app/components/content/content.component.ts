import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/dados/service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public listagem: any = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.adicionarListagem();
  }

  adicionarListagem(){
    this.listagem = this.service.getLista();
    console.log("listagem", this.listagem)
  }
}
