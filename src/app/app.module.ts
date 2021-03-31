import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { SearchFormComponent } from './search/search-form/search-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientModule } from './clients/client.module';
import { CompanyModule } from './company/company.module';
import { SharedModule } from './shared/shared.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientModule,
    CompanyModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
