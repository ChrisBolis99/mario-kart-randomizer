import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CoursePickerConfig } from '../../models/course-picker-config';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  readonly numberOfCoursesToPick: WritableSignal<number> = signal(1);
  readonly allowDuplicates: WritableSignal<boolean> = signal(false);

  private readonly router = inject(Router);

  onSubmit(): void {
    const config: CoursePickerConfig = {
      numberOfCourses: this.numberOfCoursesToPick(),
      allowDuplicates: this.allowDuplicates()
    };

    this.router.navigateByUrl('/picker', { state: config });
  }
}
