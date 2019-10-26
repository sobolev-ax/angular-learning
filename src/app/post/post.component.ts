import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  @ContentChild('author', { static: true }) authorRef: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.authorRef.nativeElement.textContent, ':', this.post.title);
  }

}
