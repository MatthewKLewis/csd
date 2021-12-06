import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog'; 
import { RawMaterialsComponent } from './raw-materials/raw-materials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentMaterialsComponent } from './component-materials/component-materials.component';
import { FinalItemsComponent } from './final-items/final-items.component';
import { NetworkViewComponent } from './network-view/network-view.component';
import { DialogFrameComponent } from './dialog-frame/dialog-frame.component';
import { AddRawMaterialComponent } from './dialog-frame/add-raw-material/add-raw-material.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RawMaterialsComponent,
    ComponentMaterialsComponent,
    FinalItemsComponent,
    NetworkViewComponent,
    DialogFrameComponent,
    AddRawMaterialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
