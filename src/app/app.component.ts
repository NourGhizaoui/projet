import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'BeautyStore';
  images = [
    'assets/Image/image.png',
    'assets/Image/4.jpg',
    'assets/Image/image2.png',
    'assets/logo/1.png',
    'assets/logo/2.png',
    'assets/Image/productautoimage.png',
  ];
  time: number = 2000;
  STIME:number = 100;
}
