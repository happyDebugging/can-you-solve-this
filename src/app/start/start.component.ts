import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  hasPageBeenClicked = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPageClick() {
    this.hasPageBeenClicked = true;
  }

  onGetStarted() {
    this.router.navigateByUrl('/first-riddle');
  }

}
