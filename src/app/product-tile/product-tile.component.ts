import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {

  title: string;
  imgPath: string;
  variants: Array<object>;
  selectedVariant: any;
  shoeSizes: Array<number>;
  price: number;
  inStock: boolean;
  description: string;
  material: string;
  removableInsole: boolean;
  heelHeight: number;
  season: string;

  @Input()
  product: any;


  constructor() { }

  ngOnInit() {
    this.title = this.product.name;
    this.variants = this.product.variants;
    const defaultVariant: any = this.variants[0];
    this.updateDisplay(defaultVariant);

  }

  styleChange(event: any) {
    this.selectedVariant = this.variants[event.target.value];
    this.updateDisplay(this.selectedVariant);
  }

  updateDisplay(currentVariant) {
    this.imgPath = currentVariant.main_img;
    this.shoeSizes = currentVariant.sizes;
    this.price = currentVariant.price;
    this.inStock = currentVariant.inStock;
    this.description = currentVariant.description;
    this.material = currentVariant.details.material;
    this.removableInsole = currentVariant.details.removableInsole;
    this.heelHeight = currentVariant.details.heelHeightCm;
    this.season = currentVariant.details.season;
  }

}
