import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingSpinner } from './components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingSpinner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mario-kart-randomizer');
}
