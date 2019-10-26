import { Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() post: Post;

  @Output() 'remove' = new EventEmitter<number>();

  @ContentChild('author', { static: true }) authorRef: ElementRef;

  constructor() { }

  onRemove(): void {
    this.remove.emit(this.post.id);
  }

  ngOnInit() {
    // console.log(this.authorRef.nativeElement.textContent, ':', this.post.title);
  }

  ngOnDestroy() {
    // console.log(this.authorRef.nativeElement.textContent, ':', this.post.title, 'REMOVED');
  }
}
