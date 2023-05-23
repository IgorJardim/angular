import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../Service/filmes.service';

@Component({
  selector: 'app-programacao-star',
  templateUrl: './programacao-star.component.html',
  styleUrls: ['./programacao-star.component.css']
})
export class ProgramacaoStarComponent implements OnInit {
 
 constructor(private service:FilmesService){}
  
  FilmeData:any;

ngOnInit(): void {
  this.FilmeData = this.service.Filmes
}


}