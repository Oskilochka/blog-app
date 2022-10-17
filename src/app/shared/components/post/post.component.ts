import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services";
import {User, Post} from "../../models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post | undefined;

  user: User | undefined

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getSingleUser(this.post?.userId).subscribe((user) => this.user = user);
  }

}
