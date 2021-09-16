import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-overall-purchase-stats',
  templateUrl: './overall-purchase-stats.component.html',
  styleUrls: ['./overall-purchase-stats.component.scss']
})
export class OverallPurchaseStatsComponent implements OnInit {
  usersNumber: number = 0;
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(u => {
      this.usersNumber = u.length;
    })
  }

}
