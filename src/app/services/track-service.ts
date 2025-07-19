import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly http = inject(HttpClient);
  private readonly sourceURL = 'assets/tracks.json';

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.sourceURL).pipe(
      map(raw =>
        raw.map(item => new Track(item.name, item.icon))
      )
    );
  }
}
