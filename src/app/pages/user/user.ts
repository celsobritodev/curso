import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})

export class User implements OnInit {
  username: string |null ='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getNome();
  };

  getNome() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] ;
    });

  }


  }


