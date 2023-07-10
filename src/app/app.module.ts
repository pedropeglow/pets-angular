import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTableModule } from '@angular/material/table'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './views/pets/pets.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PetDialogComponent } from './shared/pet-dialog/pet-dialog.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter.pipe';
import { MaskPipe } from './anosMascara.pipe';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './views/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetDialogComponent,
    FilterPipe,
    MaskPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
