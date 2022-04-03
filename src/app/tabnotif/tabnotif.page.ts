import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabnotif',
  templateUrl: './tabnotif.page.html',
  styleUrls: ['./tabnotif.page.scss'],
})
export class TabnotifPage implements OnInit {
  segment ='tabnotif';
  // eslint-disable-next-line @typescript-eslint/ban-types
  activeTab: String = 'chats';
  constructor() { }

  segmentChange(e){
    this.activeTab = e.target.value;
  }
  ngOnInit() {
  }

}
