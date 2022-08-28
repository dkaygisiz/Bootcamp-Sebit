import { Component, OnInit } from '@angular/core';
import { getCatService } from 'src/services/getcat.service';

interface categories {
  id: string;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private getCatService: getCatService) {}
  categories: Array<categories> = [];
  ngOnInit(): void {
    this.getCatService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
