import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor() { }

  Filmes = [
    {
      id:1,
      Filmename: "Homem-Aranha",
      Filmepreco: "R$40,00",
      FilmeImg: "../../../assets/HA.png",
      Filmesala1: "1A",
      Filmesala2: "3B",
      Filmedata1: "26/06",
      Filmedata2: "05/07",
      Filmehora1: "18:30",
      Filmehora2: "21:00"
    },
    {
      id:2,
      Filmename: "Velozes e Furiosos",
      Filmepreco: "R$50,00", 
      FilmeImg: "../../../assets/VF.png",
      Filmesala1: "3C",
      Filmesala2: "2A",
      Filmedata1: "12/08",
      Filmedata2: "16/08",
      Filmehora1: "16:45",
      Filmehora2: "22:00"
    } 
  ]
}
