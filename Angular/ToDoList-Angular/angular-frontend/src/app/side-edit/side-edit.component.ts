import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api-data.service';
import { EditService } from '../services/edit.service';
import { ErrorService } from '../services/error.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-edit',
  templateUrl: './side-edit.component.html',
  styleUrls: ['./side-edit.component.css']
})
export class SideEditComponent implements OnInit, OnDestroy {
  public errorMessage: string | null = null;
  private errorSubscription: Subscription | undefined;

  constructor(
    private apiService: ApiService,
    private errorService: ErrorService,
    public editService: EditService
  ) { }

  edit(title: string): void {
    if (title == '') {
      return this.errorService.setError('The task title cannot be empty string!');
    }

    this.apiService.editTask(this.editService.taskToEdit, { title, completed: false });
    this.editService.hideEdit();
  }

  ngOnInit(): void {
    this.errorSubscription = this.errorService.error$.subscribe((error) => {
      this.errorMessage = error;
    });
  }

  ngOnDestroy(): void {
    this.errorSubscription?.unsubscribe();
  }
}
