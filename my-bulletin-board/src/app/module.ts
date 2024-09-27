import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {ComponentHomeComponent} from './components/component-home/component-home.component';
import {HomeMainComponent} from './components/component-home-main/home-main.component';



@NgModule({
  declarations: [
    Component,
    ComponentHomeComponent,
    HomeMainComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleModule { }
