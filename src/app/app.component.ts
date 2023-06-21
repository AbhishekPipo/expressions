import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName = 'Sachin';
  lastName = 'Pax';

  title = "Angular Property Binding Example";

  isDisabled = false;
  public value = ''; // Assign an initial value

 
}
