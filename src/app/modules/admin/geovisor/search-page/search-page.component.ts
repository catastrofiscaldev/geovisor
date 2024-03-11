import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { SearchComponent } from '../components/search/search.component';
import { ResultComponent } from '../components/result/result.component';


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
