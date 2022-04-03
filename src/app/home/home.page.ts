import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tweets = [];
  segment = 'home';
  opts = {
    slidesPerView: 4.5,
    spaceBetween: 10,
    slidesOffsetBefore: 0
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
}
