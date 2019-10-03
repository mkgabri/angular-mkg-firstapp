import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world',
  template: `
    <div class="hello-world">
      <h1>Hola mi mundo</h1>
      <h2> todo bien </h2>
    </div>
  `,
  styles: ['.hello-world { background: #000; color: #fff;}']
})
export class HelloWorld {

}