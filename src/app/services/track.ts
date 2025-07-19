import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Track } from '../models/track.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private tracksUrl = 'assets/tracks.json';

  constructor(private http: HttpClient) {}

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(this.tracksUrl)
  }
}
