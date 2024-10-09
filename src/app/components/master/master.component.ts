import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';
import { BasicsComponent } from '../basics/basics.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [BasicsComponent, RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentComponent: string = "Roles";
  displayBasics: boolean = false;

  changeTab (tabName: string) {
    this.currentComponent = tabName;
  }

  showBasics () {
    this.displayBasics = !this.displayBasics
  }

}
