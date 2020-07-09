import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: any;
  termino: string;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private servicio: HeroesService) 
  {
  }
  
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this.servicio.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }


  verHeroe(index: number)
  {
    this.router.navigate(['/heroe', index]);
  }
}
