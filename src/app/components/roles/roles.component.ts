import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// component decorator
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  // variable declearation
  firstName: string = 'Angular Tutorial'; 
  version = 'v18';
  ver: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = "radio";
  selectedState: string = '';

  // functions declearation
  showWelcomeAlert () {
    alert("Welcome to Angular");
  }

  showWelcomeMessage (message: string) {
    alert(message);
  }
}
 