import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output()
  sidenav = new EventEmitter();
  toggelSidenav() {
    this.sidenav.emit('toggel');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
