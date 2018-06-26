import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatIcon, MatIconModule, MatToolbarModule,
          MatSidenav, MatSidenavModule, MatProgressSpinnerModule,
          MatNativeDateModule, MatListModule, MatTableModule, MatCheckboxModule,
          MatPaginator, MatPaginatorModule, MatSortModule, MatCardModule,
          MatButtonModule
        } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatInputModule, MatIcon, MatIconModule, MatToolbarModule,
    MatSidenav, MatSidenavModule, MatProgressSpinnerModule,
    MatNativeDateModule, MatListModule, MatTableModule, MatCheckboxModule,
    MatPaginator, MatPaginatorModule, MatSortModule, MatCardModule,
    MatButtonModule, MatFormFieldModule
  ],
  declarations: []
})
export class TableModule { }
