import { Component, Input, OnInit } from '@angular/core';
import { getCatService } from 'src/services/getcat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css'],
})
export class PostsDetailComponent implements OnInit {
  constructor(
    private getCatService: getCatService,
    private route: ActivatedRoute
  ) {}
  elemanlar: Array<any> = [];
  postIndex: any;
  ngOnInit(): void {
    this.postIndex = Number(this.route.snapshot.paramMap.get('postIndex'));
    this.getCatService.getCategories().subscribe((res) => {
      this.elemanlar = res;
    });
  }
}
