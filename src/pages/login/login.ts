import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DevicemeumPage } from '../devicemeum/devicemeum';
import { BasicPage,PageOne,PageTwo,PageThree} from '../leftmeum/leftmeum';
// import { appRouter} from '../../app/app.routes'

// import {Http} from '@angular/http';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    // this.http.get(`http://192.168.1.7:8088/gdy1/opt/QueryHeadQRCodeByOptCode`)
   this.navCtrl.setRoot(BasicPage);
  // this.navCtrl.push(BasicPage);
  // this.navCtrl.;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
