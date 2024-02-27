import { Routes } from '@angular/router';
import { MapComponent } from 'app/modules/landing/geovisor/map/map.component';
import { SearchPageComponent } from './Page/searchPage/search-page.component';
import { DetailSearchComponent } from './components/detail-search/detail-search.component';


export default [
    {
        path     : '',
        component: SearchPageComponent
    },
    {
        path     : ':id',
        component: DetailSearchComponent
    }
] as Routes;
