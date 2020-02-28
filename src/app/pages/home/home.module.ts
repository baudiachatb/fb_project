import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-router.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BodyModule } from './body/body.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRouterModule,
    HeaderModule,
    FooterModule,
    BodyModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
