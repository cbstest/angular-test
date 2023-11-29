import { Component } from '@angular/core';
import { Post } from '../../models/post';

import { Subscription } from 'rxjs/internal/Subscription'
import { AppStorageService } from '../../services/app-storage.service';

@Component({
  selector: 'cp-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  public posts: Post[] = []
  private subscribe: Subscription | null = null

  constructor(private appStorage: AppStorageService) {

  }

  ngOnInit(): void {
    this.subscribe = this.appStorage.getPosts()
      .subscribe(data => {
        console.log(data)
        this.posts = data
      })
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe()
  }

}
