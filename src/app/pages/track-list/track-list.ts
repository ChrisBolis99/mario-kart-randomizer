import { Component, effect, signal } from '@angular/core';
import { Track } from '../../models/track.model';
import { TrackService } from '../../services/track';
import { TrackDisplay } from '../../components/track-display/track-display';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-track-list',
  imports: [TrackDisplay, RouterModule],
  templateUrl: './track-list.html',
  styleUrl: './track-list.scss'
})
export class TrackList {
  private readonly _tracks = signal<Track[]>([]);
  tracks = this._tracks.asReadonly();
  
  constructor(private readonly trackService: TrackService) {
    effect(() => {
      this.trackService.getTracks().subscribe((tracks) => {
        this._tracks.set(tracks);
      })
    })
  }
}
