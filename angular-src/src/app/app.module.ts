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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RawMaterialsComponent } from './raw-materials/raw-materials.component';
import { ComponentMaterialsComponent } from './component-materials/component-materials.component';
import { FinalItemsComponent } from './final-items/final-items.component';
import { NetworkViewComponent } from './network-view/network-view.component';
import { DialogFrameComponent } from './dialog-frame/dialog-frame.component';
import { AddRawMaterialComponent } from './dialog-frame/add-raw-material/add-raw-material.component';
import { AddComponentMaterialComponent } from './dialog-frame/add-component-material/add-component-material.component';
import { ConfirmComponent } from './dialog-frame/confirm/confirm.component';
import { AddFinalItemComponent } from './dialog-frame/add-final-item/add-final-item.component';
import { NetworkNodeComponent } from './network-view/network-node/network-node.component';
import { ReverseNetworkViewComponent } from './reverse-network-view/reverse-network-view.component';
import { EditRawMaterialComponent } from './dialog-frame/edit-raw-material/edit-raw-material.component';

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
    AddComponentMaterialComponent,
    ConfirmComponent,
    AddFinalItemComponent,
    NetworkNodeComponent,
    ReverseNetworkViewComponent,
    EditRawMaterialComponent,
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
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
