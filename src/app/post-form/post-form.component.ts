import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass']
})
export class PostFormComponent implements OnInit {

  title = '';
  text = '';


  @Output() add: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  addPost(): void {
    if (!this.title.trim() && !this.text.trim()) return;

    const post: Post = {
      title: this.title,
      text: this.text,
    };

    this.add.emit(post);

    this.title = '';
    this.text = '';
  }

}
