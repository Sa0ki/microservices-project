import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit{
  bills: any;
  customerId!: number
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.customerId = activatedRoute.snapshot.params["customerId"];
    console.log(this.customerId)
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/BILLING-SERVICE/bills/" + this.customerId).subscribe({
      next: (data)=>{this.bills = data;},
      error: (err)=>{}
    })
  }
}
