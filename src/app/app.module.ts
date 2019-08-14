import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { SocialpostsComponent } from "./socialposts/socialposts.component";
import { PostComponent } from "./socialposts/post/post.component";
import { PostFormComponent } from "./socialposts/post-form/post-form.component";

@NgModule({
  declarations: [
    AppComponent,
    SocialpostsComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
