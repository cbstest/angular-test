import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import { Observable, map, of } from 'rxjs';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {
  
  private posts: Post[] | null = null

  constructor(
    private API: ApiService,
    private dataService: DataService
  ) { }

  public getPosts(): Observable<Post[] | never> {
    if (this.posts) {
      return of(this.posts)
    } else {
      return this.dataService.getData<Post, IPost>(this.API.source['posts'], Post)
      .pipe(
        map((res: Post[]) => {
          this.posts = res
          return this.posts
        })
      )
    }
  }
}
