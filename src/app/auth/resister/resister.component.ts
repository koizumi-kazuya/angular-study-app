import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.scss']
})
export class ResisterComponent implements OnInit {

  test : Date = new Date();
  focus;
  focus1;
  constructor() { }

  ngOnInit() {}
}
