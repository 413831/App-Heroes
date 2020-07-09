import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
  @Output() seleccionarHeroe: EventEmitter<any>;

  constructor(private _heroesService: HeroesService, private router: Router) 
  {
    this.seleccionarHeroe = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  verHeroe()
  {    
    this.router.navigate(['/heroe', this.index]);
  }

}
