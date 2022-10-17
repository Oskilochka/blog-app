import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostService, Post, Comment} from "../../../shared";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  path: string = "./assets/images/single-post.png";
  altText: string = "single post img"

  post: Post | undefined
  comments: Comment[] = []

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      this.postService.getSinglePost(postId!).subscribe((post) => this.post = post);
      this.postService.getCommentsByPostId(postId!).subscribe((comments) => this.comments = comments);
    });
  }
}
