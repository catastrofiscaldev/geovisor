import { Routes } from '@angular/router';
import { MapComponent } from 'app/layout/common/map/map.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { DetailSearchComponent } from './detail-search/detail-search.component';
import { PropertiesComponent } from './properties/properties.component';


export default [
    {
        path     : '',
        redirectTo : 'search',
        pathMatch: 'full'
    },
    {
        path     : 'search',
        component: SearchPageComponent
    },
    {
        path     : 'properties',
        component: PropertiesComponent
    },
    {
        path     : ':id',
        component: DetailSearchComponent
    },

] as Routes;
