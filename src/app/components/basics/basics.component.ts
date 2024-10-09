import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
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
