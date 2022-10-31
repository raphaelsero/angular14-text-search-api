import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextSearchComponent } from './text-search/text-search.component';

import { TextSearchApiService } from './text-search-api.service';
import { TextSearchDialogComponent } from './text-search-dialog/text-search-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TextSearchComponent,
    TextSearchDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers: [TextSearchApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
