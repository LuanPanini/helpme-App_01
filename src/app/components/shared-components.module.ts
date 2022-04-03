import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetComponent } from './tweet/tweet.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

@NgModule({
  declarations: [TweetComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ExploreContainerComponentModule,
    SharedDirectivesModule,


  ],
  exports: [TweetComponent]
})
export class SharedComponentsModule { }
