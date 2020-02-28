import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { CommonModule } from '@angular/common';
import { FacebookComponent } from './facebook/facebook.component';

@NgModule({
  declarations: [BodyComponent, FacebookComponent],
  imports: [CommonModule],
  exports: [BodyComponent]
})
export class BodyModule { }

