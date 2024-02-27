import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ResultComponent } from 'app/modules/landing/geovisor/components/result/result.component';
import { SearchComponent } from 'app/modules/landing/geovisor/components/search/search.component';

@Component({
    selector: 'app-search-page',
    standalone: true,
    imports: [
        CommonModule,SearchComponent, ResultComponent, MatDividerModule
    ],
    templateUrl: './search-page.component.html',

    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent { }
