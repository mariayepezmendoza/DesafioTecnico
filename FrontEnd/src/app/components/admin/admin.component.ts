import { Component, Input, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public listAgencias:any = []

  constructor(
    private restService:RestService
  ) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.restService.get(`https://my-json-server.typicode.com/mariayepezmendoza/DesafioTecnico/agencias`)
    .subscribe(respuesta =>{
      console.log(respuesta);
      this.listAgencias = respuesta;
    });
  }

}
