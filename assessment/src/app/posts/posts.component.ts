import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getCatService } from 'src/services/getcat.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(
    private getCatService: getCatService,
    private route: ActivatedRoute
  ) {}
  categories: Array<any> = [];
  categoryIndex: any;
  ngOnInit(): void {
    this.categoryIndex = this.route.snapshot.paramMap.get('categoryIndex');
    this.getCatService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
