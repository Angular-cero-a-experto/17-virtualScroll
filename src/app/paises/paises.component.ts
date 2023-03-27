import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any = [];

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {

    this.http.get(`https://restcountries.com/v3.1/lang/spanish`).subscribe( paises => {
      console.log(paises);
      this.paises = paises;
    })
    
  }

  drop( evento: CdkDragDrop<any> ) {
    // console.log(evento);
    moveItemInArray( this.paises, evento.previousIndex, evento.currentIndex );
  }

}
