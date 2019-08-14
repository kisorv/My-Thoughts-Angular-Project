import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-socialposts",
  templateUrl: "./socialposts.component.html",
  styleUrls: ["./socialposts.component.css"]
})
export class SocialpostsComponent implements OnInit {
  listOfPosts: object[] = [
    {
      title: "Angular",
      post: "This is when it gets tricky..."
    },
    {
      title: "JavaScript",
      post: "That was a whirlwind but pretty cool."
    },
    {
      title: "CSS",
      post: "Now this is fashionably, fresh!"
    }
  ];
  showForm: boolean = false;
  constructor() {}

  onRemoveHandler(index): void {
    this.listOfPosts.splice(index, 1);
  }

  onAddHandler(newPost: object): void {
    console.log(newPost);
    this.listOfPosts.unshift(newPost);
    this.toggleForm();
  }
  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  ngOnInit() {}
}
