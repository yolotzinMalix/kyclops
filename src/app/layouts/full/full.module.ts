import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
// Ngx-bootstrap
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
//Shared Module
// import { SharedModule } from './../shared/shared.module';
// Components
import {FullComponent} from './full.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DynamicMenuComponent} from './sidebar/dynamic-menu/dynamic-menu.component';
import {SidebarHeaderComponent} from './sidebar-header/sidebar-header.component';
import {TopbarComponent} from './topbar/topbar.component';
@NgModule({
  declarations: [
    FullComponent,
    SidebarComponent,
    DynamicMenuComponent,
    SidebarHeaderComponent,
    TopbarComponent,
  ],
  imports: [

    CommonModule,
    BrowserModule,
    RouterModule,
    CollapseModule,
    BsDropdownModule,
  ],

})
export class FullModule { }
