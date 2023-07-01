import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-data.service';
import { task } from '../interfaces-types/interfaces-types';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public data!: task[];
  public errorMessage: string | null = null;

  constructor(
    public apiService: ApiService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {

    this.errorService.error$.subscribe((error) => {
      this.errorMessage = error;
      setTimeout(() => { this.errorMessage = null }, 3000);
    })

    this.apiService.getDataFromAPI().subscribe((data) => {
      this.data = data;
      this.apiService.setData(data);
    }, (err: Error) => {
      this.errorService.setError(err.message);
    })
  }
}
