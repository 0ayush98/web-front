import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  notifications=0;
  showSpinner = false;

  loadSpinner(){
    this.showSpinner=true;
    setTimeout(()=>{
   this.showSpinner=false; 
      
    },5000)
  }
}
