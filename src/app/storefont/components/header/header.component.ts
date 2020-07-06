import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loadingEnable: boolean;
  sidenavEnable = false;

  @Output()
  sidenav = new EventEmitter();

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }
  constructor(public dialog: MatDialog) { }

  openLogin() {
    this.dialog.open(LoginComponent,{
      width: '400px'
    });
  }

  ngOnInit(): void {
  }

}
