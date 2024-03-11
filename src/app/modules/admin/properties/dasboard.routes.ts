import { Routes } from '@angular/router';
import { DasbordComponent } from './dasbord.component';
import { DetailLandComponent } from './detail-land/detail.land.component';


export default [

    {
        path     : '',
        component : DasbordComponent,
        children : [
            {
                path     : ':id',
                component: DetailLandComponent
            }
        ]
    }

] as Routes;
