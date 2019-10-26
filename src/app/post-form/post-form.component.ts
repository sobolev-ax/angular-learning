import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass']
})
export class PostFormComponent implements OnInit {

  constructor() { }
  static innerId = 1000;

  title = '';
  text = '';


  @Output() add: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', { static: false }) titleRef: ElementRef;
  @ViewChild('textInput', { static: false }) textRef: ElementRef;
  @ViewChild('addButton', { static: false }) addRef: ElementRef;

  ngOnInit() {
  }

  addPost(): void {
    if (!this.title.trim() && !this.text.trim()) return;

    const post: Post = {
      title: this.title,
      text: this.text,
      id: PostFormComponent.innerId = PostFormComponent.innerId + 1,
    };

    this.add.emit(post);

    this.title = '';
    this.text = '';
  }

  showInstruction(): void {
    const delay = 1500;
    const step = 1000;

    this.title = 'Введите название растения';
    this.titleRef.nativeElement.focus();

    setTimeout(() => {
      this.text = 'Далее введите описание и нажмите кнопку Добавить растение';
      this.textRef.nativeElement.focus();
    },         delay);

    setTimeout(() => {
      this.textRef.nativeElement.focus();
    },         delay + step * 1);

    setTimeout(() => {
      this.addRef.nativeElement.focus();
    },         delay + step * 2);

    setTimeout(() => {
      this.text = '';
      this.title = '';
      this.titleRef.nativeElement.focus();
    },         delay + step * 3);
  }

}
