import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
 
  show = true;
  view= true;
  result = false
  constructor() { }

  ngOnInit(): void {
    this.progress()
  }


 

  progress(){
   
    setTimeout(()=>{
   this.show=false; 
   this.view=false;
   this.result=true;
      
    },6000)
  }
}
