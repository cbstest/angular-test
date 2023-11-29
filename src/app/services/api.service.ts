import { Injectable } from '@angular/core';

const BASE_URL: string = 'https://jsonplaceholder.typicode.com'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public source: Record<string, string> = {
    albums: `${BASE_URL}/albums`,
    posts: `${BASE_URL}/posts`,

  }
  constructor() { }
}
