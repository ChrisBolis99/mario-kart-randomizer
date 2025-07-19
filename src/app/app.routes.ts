import { Routes } from '@angular/router';
import { TrackList } from './pages/track-list/track-list';
import { Homepage } from './pages/homepage/homepage';
import { PickedCoursesList } from './pages/picked-courses-list/picked-courses-list';

export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'list', component: TrackList },
    { path: 'picker', component: PickedCoursesList }
];
