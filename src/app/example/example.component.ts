import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  user=[];
  submit="submit"
  constructor(private route:Router,private activatedroute:ActivatedRoute) { }
 id=this.activatedroute.snapshot.paramMap.get('a');
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userdetails'));
    console.log(this.user)
    if(this.id){
      this.submit="Update";
       }
  }

  form = new FormGroup({
    fname: new FormControl('',Validators.required),
    usermail:new FormControl('',[Validators.required,Validators.email]),
    userurl:new FormControl('',Validators.required),
    userphone:new FormControl('',Validators.required),
    userstate:new FormControl('',Validators.required),
    useraddress:new FormControl('',Validators.required),
    userdate:new FormControl('',Validators.required)
  })
  a=[];
  onSubmit(){
    
   // console.log(this.form.value);
   this.a =  this.form.value;

   console.log(this.a);
   if(localStorage.getItem('userdetails')){
     this.user = JSON.parse(localStorage.getItem('userdetails'));
   }
    
    this.user.push(this.a)
console.log(this.user)
      localStorage.setItem("userdetails",JSON.stringify(this.user));
      this.route.navigate(['/userdetails']);
    } 
}
