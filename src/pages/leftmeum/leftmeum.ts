
import { App, MenuController } from 'ionic-angular';
import { Component, NgZone, ViewChild,ViewChildren } from '@angular/core';
import { Config, Menu, NavController, Platform } from 'ionic-angular';
import {DevicemeumPage} from '../devicemeum/devicemeum';



@Component({
   templateUrl:'deviceContain.html'
})
export class BasicPage {
  constructor(app: App, menu: MenuController,public platform: Platform) {
  }
}



@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      光缆段界面
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
<p>welecome to liucong<p>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageOne { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      电缆段界面
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageTwo { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      xxx界面
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageThree { }
