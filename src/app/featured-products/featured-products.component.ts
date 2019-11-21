import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  @Input()
  productArray: Array<object>;


  constructor() { }

  ngOnInit() {
  }

}
