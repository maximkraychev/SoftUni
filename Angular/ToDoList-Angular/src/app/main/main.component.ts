import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-data.service';
import { task } from '../interfaces-types/interfaces-types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public data!: task[];

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDataFromAPI().subscribe((data) => {
      this.data = data;
      this.apiService.setData(data);
    })
  }
}
