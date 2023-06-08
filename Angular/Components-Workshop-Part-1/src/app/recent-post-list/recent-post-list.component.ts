import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recent-post-list',
  templateUrl: './recent-post-list.component.html',
  styleUrls: ['./recent-post-list.component.css']
})
export class RecentPostListComponent {
  constructor(private apiService: ApiService) {

    this.apiService.loadPosts(5).subscribe((value) => {
      console.log(value);
    })
    
  }
}
