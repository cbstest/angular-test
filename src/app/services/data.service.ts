import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getData<T extends I, I>(path: string, cl: { new(item: I): T }): Observable<T[] | never> {
    return this.http.get<T[]>(path)
      .pipe(
        map((res: T[]) => {
          const arr: T[] = res.map(item => new cl(item))
        return arr
        })
        // catchError()
      )
}
}
