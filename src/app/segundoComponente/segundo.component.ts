import { Component } from '@angular/core';

@Component ({
  selector: 'list-vector',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class ListVector {
  users = ['HTML5', 'CSS3', 'JS', 'ANGULAR', 'REACT'];
}