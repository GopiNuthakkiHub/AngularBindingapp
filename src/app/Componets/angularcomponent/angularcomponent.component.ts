import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularcomponent',
  templateUrl: './angularcomponent.component.html',
  styleUrls: ['./angularcomponent.component.css']
})
export class AngularcomponentComponent implements OnInit {

  constructor() { }
  users=[
    {
    firstname:'Anandan',
    lastname:'subbaiah',
    age:54,
    address:{
      door:6001,
      street:'ORR',
      city:'bangalore'
    },
    image:'https://i.picsum.photos/id/445/200/200.jpg?hmac=IJGybzd6hRYuiwyBiBXZ_3cOjM0MrrTpARBSFzypGNI'
  },
  {
    firstname:'john',
    lastname:'britto',
    
    address:{
      door:6001,
      street:'ORR',
      city:'bangalore'
    },
    image:'https://i.picsum.photos/id/445/200/200.jpg?hmac=IJGybzd6hRYuiwyBiBXZ_3cOjM0MrrTpARBSFzypGNI'
  },
  {
    firstname:'benjamin',
    lastname:'kuruvila',
    age:54,
    address:{
      door:6001,
      street:'ORR',
      city:'bangalore'
    },
    image:'https://i.picsum.photos/id/445/200/200.jpg?hmac=IJGybzd6hRYuiwyBiBXZ_3cOjM0MrrTpARBSFzypGNI'
  }
]
  ngOnInit(): void {
  }

}
