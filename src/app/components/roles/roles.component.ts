import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

// component decorator
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
// dependency injection 

  // New way: by using inject
  http = inject(HttpClient);

  // Old way : before Angular 16
  // constructor(private http: HttpClient) {
  // }

  // To make api call on page load
  ngOnInit(): void {
    this.getAllRoles();
  }

  roleList: IRole[] = [];
  getAllRoles () {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: any) => {
      this.roleList = res.data;
    })
  }
}
 