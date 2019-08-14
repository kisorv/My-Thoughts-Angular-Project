import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();
  constructor() {}

  addPost(postForm: NgForm): void {
    this.submitted.emit({
      title: postForm.value.title,
      post: postForm.value.post
    });
  }

  ngOnInit() {}
}
