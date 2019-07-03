import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [CommonModule,HttpClientModule, RouterModule, ReactiveFormsModule],
    exports: [ HeaderComponent, FooterComponent, ReactiveFormsModule],
    declarations: [HeaderComponent, FooterComponent],
    providers: []
  })
  export class CoreModule { }
  