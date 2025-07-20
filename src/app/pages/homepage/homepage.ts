import { Component, ElementRef, inject, signal, ViewChild, WritableSignal } from '@angular/core';
import { CoursePickerConfig } from '../../models/course-picker-config';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule, RouterModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  @ViewChild('courseInput', { static: true }) courseInputRef!: ElementRef<HTMLInputElement>;

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

  validateCourseCount(): void {
    const value = this.numberOfCoursesToPick();

    if (value < 1 || isNaN(value)) {
      console.warn(`User entered invalid number: ${value}. Resetting to 1.`);
      this.numberOfCoursesToPick.set(1);
      
      this.courseInputRef.nativeElement.value = '1';

      return;
    }

    this.numberOfCoursesToPick.set(value);
  }
}
