import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class HelloWorld {
  title = 'Bienvenido';
  subtitle = 'Mi primera pagina en angular.'
}