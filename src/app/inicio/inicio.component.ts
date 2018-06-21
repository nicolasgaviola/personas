import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-inicio',
templateUrl: './inicio.component.html',
styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 logros : ILogro[];
 titulo  : string = 'Bienvenidos';
 constructor() { }
 ngOnInit() {
 this.logros = this.getLogros();
 }
 getLogros() : ILogro[]{
  return [{
   id:1,
   title:"Logré algo muy interesante",
   description:"Lorem ipsum dolor sit amet"
  }, {
   id:2,
   title:"Logré otra cosa muy interesante",
   description:"Lorem ipsum dolor sit amet"
  }, {
   id:3,
   title:"Logré algo aún mas interesante",
   description:"Lorem ipsum dolor sit amet"
  }
 ]
 }
}
interface ILogro{
  id : number;
  title : string;
  description ?: string;
}