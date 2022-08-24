import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  currentLink: string;

  constructor(private location: Location) {}

  navigateLink(): void {
    this.currentLink = this.location.path();
  }

  ngOnInit(): void {
    this.currentLink = this.location.path();
  }
}
