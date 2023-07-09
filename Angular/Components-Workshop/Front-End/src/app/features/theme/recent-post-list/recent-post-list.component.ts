import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { IPost } from '../../../interfaces/post';

@Component({
  selector: 'app-recent-post-list',
  templateUrl: './recent-post-list.component.html',
  styleUrls: ['./recent-post-list.component.css']
})
export class RecentPostListComponent implements OnInit {

  postList: IPost[] | null = null;
  showSpinner: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe((data) => {
      this.postList = data;
      this.showSpinner = false;
    }, (err) => {
      console.log(err);
      this.showSpinner = false;
    })
  }
}
