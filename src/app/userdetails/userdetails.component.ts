import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
 userdetail=[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.userdetail=JSON.parse(localStorage.getItem('userdetails'))
  }
  edituser(a){
this.router.navigate(['/example',a]);
  }
  deleteform(id){
    this.userdetail.splice(id,1);
    localStorage.setItem("userdetails",JSON.stringify(this.userdetail));
  }
}
