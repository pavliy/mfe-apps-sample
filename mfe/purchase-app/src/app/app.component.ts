import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { byPassRouting } from 'src/shared/routing-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private router: Router){}

  ngOnInit(): void {
    byPassRouting(this.router, window);
  }
  title = 'purchase-app';
  ngVersion = VERSION.full;
}
