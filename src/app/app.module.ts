import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/main/title/title.component';
import { ButtonComponent } from './components/main/button/button.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { MenuListComponent } from './components/menu/menu-list/menu-list.component';
import { MenuItemViewerComponent } from './components/menu/menu-item-viewer/menu-item-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ButtonComponent,
    MenuItemComponent,
    MenuListComponent,
    MenuItemViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
