import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookmarkListComponent } from './bookmark/bookmark-list/bookmark-list.component';
import { CommonModule } from '@angular/common';
import { BookmatkListComponent } from './bookmark/bookmatk-list/bookmatk-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    BookmarkListComponent,
    BookmatkListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
