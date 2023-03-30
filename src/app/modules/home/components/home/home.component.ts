import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  userName?: string | null = ""

  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("username")
  }

}
