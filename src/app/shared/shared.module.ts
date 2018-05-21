import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatGridListModule, MatProgressSpinnerModule, MatTableModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
    imports: [MatButtonModule, MatButtonModule, MatMenuModule, MatInputModule , MatSidenavModule ,
        MatIconModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatSelectModule ,
        MatListModule, MatGridListModule, MatCardModule, MatTabsModule, MatProgressSpinnerModule,
        MatTableModule, MatPaginatorModule, MatCheckboxModule
    ],
    exports: [MatButtonModule, MatButtonModule, MatMenuModule, MatInputModule , MatSidenavModule ,
        MatIconModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatSelectModule ,
        MatListModule, MatToolbarModule, MatGridListModule, MatCardModule, MatTabsModule, MatProgressSpinnerModule,
        MatTableModule, MatPaginatorModule, MatCheckboxModule
    ],
})

export class SharedModule {}
