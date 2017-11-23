//根模块，告诉ionic 怎么组装应用

//引入angular 以及ionic 的系统模块
import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, } from 'ionic-angular';

//引入根组件
import { MyApp } from './app.component';



//自定义组件
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { DevicemeumPage } from '../pages/devicemeum/devicemeum';
import { LinkWePage } from '../pages/link-we/link-we';
import { ModalContentPage } from '../pages/devicemeum/devicemeum';
import { BasicPage} from '../pages/leftmeum/leftmeum';
import { PageOne  } from '../pages/leftmeum/leftmeum';
import { PageTwo  } from '../pages/leftmeum/leftmeum';
import { PageThree  } from '../pages/leftmeum/leftmeum';






//ionic打包成app以后配置启动画面，以及导航条的服务
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import {Http} from '@angular/http';


@NgModule({
  declarations: [ /*声明要用的组件模块*/
    MyApp,
    LoginPage,
    DevicemeumPage,
    LinkWePage,
    ModalContentPage,
    BasicPage
 
  ],
  imports: [  /*引入的模块 依赖的模块*/
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true,
     }
)],
  bootstrap: [IonicApp], /*启动的模块*/
  entryComponents: [    /*配置不会在模版中使用的组件*/
    MyApp,
    LoginPage,
    DevicemeumPage,
    BasicPage,
    LinkWePage,
    // OltPage,
    ModalContentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
