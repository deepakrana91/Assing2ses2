import { person } from './Displayclass';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {

   let student1= new person(12,'deepak Rana',26);
   let detail=student1.Display();
   console.log(detail);

  }
}


