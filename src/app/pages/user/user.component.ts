import {Component, OnInit} from '@angular/core';
import {User, UserService} from "../../shared";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User | undefined

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('id');
      this.userService.getSingleUser(userId!).subscribe((user) => this.user = user);
    });
  }

}
