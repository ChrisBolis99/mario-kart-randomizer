import { Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loading-service';

@Component({
  selector: 'app-loading-spinner',
  imports: [],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.scss'
})
export class LoadingSpinner {
  readonly loadingService = inject(LoadingService)
}
