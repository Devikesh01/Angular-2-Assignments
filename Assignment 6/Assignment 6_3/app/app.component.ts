import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> ASSIGNMENT_6 </h1>

  <label for="name">Marvellous Infosystems:</label>
  <input type="text" name="name" id="name" /><br><br>
  `,
  styles: [`label  {
    color: rgb(123, 107, 180);
    font-weight: bold;
    width: 150px;
    }`
    ]
})
export class AppComponent {
  title = 'marvellousfirst';
}
