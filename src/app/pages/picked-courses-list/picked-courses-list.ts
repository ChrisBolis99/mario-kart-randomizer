import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CoursePickerConfig } from '../../models/course-picker-config';
import { Track } from '../../models/track.model';
import { TrackDisplay } from '../../components/track-display/track-display';
import { TrackService } from '../../services/track-service';

@Component({
  selector: 'app-picked-courses-list',
  imports: [TrackDisplay, RouterModule],
  templateUrl: './picked-courses-list.html',
  styleUrl: './picked-courses-list.scss'
})
export class PickedCoursesList {
  private readonly router = inject(Router);
  private readonly trackService = inject(TrackService);

  readonly config = this.router.getCurrentNavigation()?.extras.state as CoursePickerConfig;

  private readonly _selectedTracks = signal<Track[]>([]);
  readonly currentIndex = signal(0);

  readonly currentTrack = computed(() => {
    return this._selectedTracks()[this.currentIndex()] ?? null;
  });

  readonly totalCourses = computed(() => this._selectedTracks().length);

  constructor() {
    if (!this.config) {
      this.router.navigateByUrl('/');
      console.warn("Empty config, redirecting to home!");
      return;
    }

    this.trackService.getTracks().subscribe((allTracks) => {
      const picked = this.pickRandomTracks(allTracks, this.config.numberOfCourses, this.config.allowDuplicates);
      this._selectedTracks.set(picked);
    });
  }

  next(): void {
    this.currentIndex.update((i) => i + 1);
  }

  private pickRandomTracks(all: Track[], count: number, allowDuplicates: boolean) {
    const selected: Track[] = [];

    if (count <= 0) {
      alert(`You must select at least 1 course. Defaulting to 1.`);
      count = 1;
    }

    if (!allowDuplicates && count > all.length) {
      alert(`You requested ${count} unique tracks, but only ${all.length} are available. Picking ${all.length} instead.`);
      count = all.length;
    }

    while (selected.length < count) {
      const random = all[Math.floor(Math.random() * all.length)];
      if (allowDuplicates || !selected.includes(random)) {
        selected.push(random);
      }
    }

    return selected;
  }
}
