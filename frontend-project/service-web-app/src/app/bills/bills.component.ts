import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit{
  bills: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/BILLING-SERVICE/bills?projection=fullBill").subscribe({
      next: (data)=>{this.bills = data;},
      error: (err)=>{}
    })
  }
}
