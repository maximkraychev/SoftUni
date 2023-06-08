import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-recent-post-list',
  templateUrl: './recent-post-list.component.html',
  styleUrls: ['./recent-post-list.component.css']
})
export class RecentPostListComponent {

  postList: IPost[] | null = null;

  constructor(private apiService: ApiService) {

    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.postList = value;
      },
      error: (err) => {
        console.log(err);

      }
    })

  }
}
