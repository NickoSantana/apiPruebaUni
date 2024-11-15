import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../servicio/api.service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  constructor(
    private service: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.service.obtienePersonajes().subscribe((res)=>{
      console.log(res);
    })
  }
}
