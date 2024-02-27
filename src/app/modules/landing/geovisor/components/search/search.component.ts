import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,FormControl, ReactiveFormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
    selector: 'search',
    standalone: true,
    imports: [
        CommonModule, MatIconModule, MatButtonModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,MatInputModule,MatSelectModule
    ],
    templateUrl: './search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit{

    @ViewChild('searchNgForm') searchNgForm: NgForm;
    @Output() toggleDrawerOpen = new EventEmitter<void>();
    searchForm: FormGroup;
    optionsList = ['CPU', 'Cod. Predio Municipal', 'Partida Registral', 'Dirección'];
    selectValue:string = this.optionsList[3];
    constructor(
        private _formBuilder: FormBuilder,

    ){
        this.searchForm = this._formBuilder.group({
            options: [this.optionsList[3]],
            ubigeo: ['', Validators.required],
            address: [''],
            rememberMe: [''],
        });
    }
    ngOnInit(): void {
        this.searchForm.get('options').valueChanges.subscribe(value => {
           this.selectValue = value;
        });
    }
    onToggleDrawerOpen() {
        this.toggleDrawerOpen.emit();
    }
}
