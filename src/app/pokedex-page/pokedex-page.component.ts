import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../service/pokedex.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Pokemon } from '../model/pokemon';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailComponent } from './dialog-detail/dialog-detail.component';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent implements OnInit {

  formularioBusca:FormGroup;

  pokemonList:Pokemon[];
  listImages= [];
  constructor(private service: PokedexService, private formBuilder: FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.createformSearh();
    this.get();
  }
  createformSearh(){
    this.formularioBusca = this.formBuilder.group({
      busca:['']
    })
  }
  get(){
    this.service.get().then((response =>{
      this.pokemonList = response.results.filter((e => e.name))
      this.pokemonList .forEach(p => {
        const regex = /\/(\d+)\/$/;
        const match = regex.exec(p.url);
        if (match) {
          p.codigoImagem = match[1];
        }
      });
    })).catch((error =>{
      console.log(error)
    }))
  }


  search(){
   let pokemonsFiltrados: Pokemon[] =[];
   let nome =  this.formularioBusca.get('busca').value

   if(nome){
    this.pokemonList = this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(nome.toLowerCase())
    );
    if(!this.pokemonList.length){
      console.log('nao encontrado')
    }else{
      const numero = parseInt(this.pokemonList[0].url.split('/').filter(Boolean).pop() as string);
    }
   }else{
    this.get();
   }
  
  };


 
  openDialog(idPokemon:string): void {
    const dialogRef = this.dialog.open(DialogDetailComponent, {
      width: '600px',
      data: { id:idPokemon} // Passe quaisquer dados extras para o Dialog
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('O Dialog foi fechado', result);
    });
  }

}
