import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList: IDesignation[] = [];
  isLoader: boolean = true;
  masterService = inject(MasterService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllDesignation()
  }

  getAllDesignation() {
    this.masterService.getDesignations().subscribe((res: APIResponseModel) => {
      this.designationList = res.data;
      this.isLoader = false;
    }, error => {
      alert("API Error: "+ error);
      this.isLoader = false; 
    });
  }
}
