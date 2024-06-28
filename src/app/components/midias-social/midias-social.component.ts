import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InstagramService } from '../../services/instagram.service';

@Component({
  selector: 'app-midias-social',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './midias-social.component.html',
  styleUrls: ['./midias-social.component.scss']
})
export class MidiasSocialComponent implements OnInit {
  posts: any[] = [];
  error: string = '';
  loading: boolean = true;

  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
    // this.instagramService.getInstagramPosts().subscribe(
    //   response => {
    //     this.posts = response.data.slice(0, 5);
    //     this.loading = false;
    //   },
    //   error => {
    //     console.error('Error fetching Instagram posts:', error);
    //     this.error = 'Could not load Instagram posts.';
    //     this.loading = false;
    //   }
    // );

    this.instagramService.getInstagramPosts().subscribe(response => {
      this.posts = response.data.slice(0, 5);
      this.loading = false;
    },
      error => {
        this.error = 'Could not load Instagram posts.';
        this.loading = false;
      }

    )
  }
}
