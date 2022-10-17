import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post, Comment} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}`)
  }

  getSinglePost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}${id}`)
  }

  getCommentsByPostId(id: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}${id}/comments`)
  }
}
