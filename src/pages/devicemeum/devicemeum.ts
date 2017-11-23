import { Component, OnInit} from '@angular/core';   
import { ModalController,Platform,IonicPage,ViewController,NavController, NavParams } from 'ionic-angular';
import { LinkWePage } from "../link-we/link-we";
import  {LoginPage} from "../login/login";
// import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

//import { ModalContentPage } from "./modal-content";
/**
 * Generated class for the DevicemeumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Member{
  ADDRESS_ID:string;
  CODE:string;
  CREATE_DATE:string;
  CREATOR:string;
  ID:string;
  NAME:string;
  SPEC_ID:string;
}
@IonicPage()
@Component({
  selector: 'page-devicemeum',
  templateUrl: 'devicemeum.html',
})
export class DevicemeumPage {
  members: Member[];
 public i='';
   public devicetypename='';
   public datas=[{'name':'刘聪','code':'hsf1','id':'12345'},{'name':'刘聪1','code':'hsf2','id':'12345'},{'name':'刘聪','code':'hsf','id':'12345'}];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicemeumPage');
  }

  backlogin(){
    this.navCtrl.setRoot(LoginPage);

  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
  // query(Object){
  //   this.http.get(`http://192.168.1.7:8088/gdy1/opt/QueryHeadQRCodeByOptCode`)
  //     .map(res => res.json()) 
  //     .subscribe(data => {
  //       if (data) this.members = data; 
  //     });
  //     console.log(this.members);
  // }
  modify(Object){
       this.datas[0].name=Object;
  }
  add(data){
    this.i=data;console.log(data);
    // this.datas.pop();
  }
  remove(id){
    this.datas.pop();
  }
  oltquery(){
  this.devicetypename="OLT";

  }
  obdquery(){
  this.devicetypename="OBD";

  }
  dpquery(){
  this.devicetypename="DP";

  }
  linkingwe(){
    this.navCtrl.push(LinkWePage);
  }

}

@Component({
   // templateUrl: 'modal-content.html',
  template:`<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
      <ion-item>
        <ion-avatar item-start>
          <img src="{{character.image}}">
        </ion-avatar>
        <h2>{{character.name}}</h2>
        <p>{{character.quote}}</p>
      </ion-item>
      <ion-item *ngFor="let item of character['items']">
        {{item.title}}
        <ion-note item-end>
          {{item.note}}
        </ion-note>
      </ion-item>
  </ion-list>
</ion-content>`
})
export class ModalContentPage implements OnInit  {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: '编码', note: 'F23234498790' },
          { title: '名称', note: 'xxxx名称' },
          { title: 'ID', note: '100042472429429429'},
          { title: '创建时间', note: '20171120'},
          { title: '创建人', note: '刘聪'}
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  ngOnInit(){}
}
