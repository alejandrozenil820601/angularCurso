import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent 
{
  heroes: string[]=['a','b','c'];
  heroeBorrado: string='';

  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift() || '';
  };
}
