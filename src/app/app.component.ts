//根组件
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import { ViewChild } from '@angular/core';
import { Config, Menu, NavController } from 'ionic-angular';

import { BasicPage,PageOne, PageTwo, PageThree } from '../pages/leftmeum/leftmeum';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 isProductionMode: boolean = true;
  // isLab: boolean = false;

  rootPage: any;
  // nextPage: any;
  // currentPlatform: string = 'windows';
  // currentPageIndex: number = 1;

  @ViewChild('content') content: NavController;
  @ViewChild(Menu) menu: Menu;

  pages = [
    { title: '设备点管理', component: BasicPage },
    { title: '光缆段管理', component: PageOne },
    { title: '电缆段管理2', component: PageTwo },
    { title: 'xxx管理3', component: PageThree }
  ];

  constructor(public platform: Platform, public config: Config) {
    this.rootPage= LoginPage;
  }
  openPage(p){
    console.log(p);
    this.content.setRoot(p.component);
  }
}
