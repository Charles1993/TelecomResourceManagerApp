import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OltPage } from './olt';

@NgModule({
  declarations: [
    OltPage,
  ],
  imports: [
    IonicPageModule.forChild(OltPage),
  ],
})
export class OltPageModule {}
