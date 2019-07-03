import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
    imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        LayoutModule
    ],
    exports: [HeaderComponent, FooterComponent, ReactiveFormsModule, AppNavComponent],
    declarations: [HeaderComponent, FooterComponent, AppNavComponent,AppNavComponent],
    providers: []
})
export class CoreModule { }
