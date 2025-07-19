import { Routes } from '@angular/router';
import { TrackList } from './pages/track-list/track-list';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'list', component: TrackList }
];
