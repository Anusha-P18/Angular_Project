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
  
}
 