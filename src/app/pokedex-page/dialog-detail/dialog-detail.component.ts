import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PokemonDetail } from 'src/app/model/pokemonDetail';
import { PokedexService } from 'src/app/service/pokedex.service';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css',

]
})
export class DialogDetailComponent implements OnInit {
  pokemonName:string;
  pokemonTypeList:any
  pokemonPeso:number;
  pokemonAltura:number;
  pokemonStatusList:any
  // public progressBarClasses = ['custom-progress-bar-red', 'custom-progress-bar-green', 'custom-progress-bar-blue'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private service: PokedexService,public dialog: MatDialog) { }

  ngOnInit(): void {
this.getById();
  
  }

  getById(){
    this.service.getById(this.data.id).then(resp=>{
      console.log(resp)
      this.pokemonName = resp.name;
      this.pokemonTypeList = resp.types;
      this.pokemonPeso =resp.weight
      this.pokemonAltura = resp. height
      this.pokemonStatusList = resp.stats

    }).catch((e)=> console.log(e))
      
  }

  convertObjectToArray(obj: any): any[] {
    return [obj];
  }
  progressBarClasses(text:string):string{
    switch (text) {
      case 'hp':
       return 'custom-progress-bar-red'
      case 'attack':
        return 'custom-progress-bar-orange'
      case 'defense':
        return 'custom-progress-bar-blue' 
      case 'special-attack':
          return 'custom-progress-bar-blue-spd' 
      case 'special-defense':
          return 'custom-progress-bar-blue-special' 
      case 'speed':
          return 'custom-progress-bar-blue-speed'
      default:
       return ''
    }
  }

}
