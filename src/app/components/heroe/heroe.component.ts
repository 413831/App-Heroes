import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe:any = {};
  dc: string = 'assets/img/dc.png';
  marvel: string = 'assets/img/marvel.jpeg';

  constructor(private route: ActivatedRoute, 
              private servicio: HeroesService) 
  {
    // Recibir parametros de la URL
    this.route.params.subscribe( params => {
      // console.log(params['id']);
      this.heroe = this.servicio.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit(): void {
  }

}
