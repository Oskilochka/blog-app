import {Component, OnInit} from '@angular/core';
import {Post, PostService} from "../../../shared";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []

  currentPage = 1
  itemsPerPage = 20

  // Img attribute
  path: string = "./assets/images/main-posts-bg.png";
  altText: string = "main img"

  constructor(private postsService: PostService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => this.posts = posts);
  }
}
