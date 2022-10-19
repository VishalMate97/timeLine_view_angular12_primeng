import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// import { TableModule } from 'primeng/table';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';

import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TempserviceService } from './tempservice.service';
import { DialogNewComponent } from './dialog-new/dialog-new.component';
import {TimelineModule} from 'primeng/timeline';


@NgModule({
  declarations: [
    AppComponent,
    DialogNewComponent
  ],
  imports: [
    TimelineModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    OverlayPanelModule,
    DynamicDialogModule
  ],
  providers: [TempserviceService,DialogService],
  bootstrap: [AppComponent],
  entryComponents:[DialogNewComponent]
})
export class AppModule { }
