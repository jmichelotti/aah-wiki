import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RingsPage } from './rings';

@NgModule({
  declarations: [
    RingsPage,
  ],
  imports: [
    IonicPageModule.forChild(RingsPage),
  ],
})
export class RingsPageModule {}
