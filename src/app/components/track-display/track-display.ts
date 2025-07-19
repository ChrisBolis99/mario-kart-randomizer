import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { Track } from '../../models/track.model';

@Component({
  selector: 'app-track-display',
  imports: [NgOptimizedImage],
  templateUrl: './track-display.html',
  styleUrl: './track-display.scss'
})
export class TrackDisplay {
  readonly track = input.required<Track>();
}
