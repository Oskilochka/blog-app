import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppComponent} from './app.component';
import {SinglePostComponent, PostsComponent, AboutComponent} from './pages';
import {HeaderComponent, CommentComponent, PostComponent} from './shared';
import {AppRoutingModule} from './app-routing.module';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    HeaderComponent,
    AboutComponent,
    SinglePostComponent,
    CommentComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
