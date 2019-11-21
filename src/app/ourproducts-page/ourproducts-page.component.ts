import { Component} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-ourproducts-page',
  templateUrl: './ourproducts-page.component.html',
  styleUrls: ['./ourproducts-page.component.css']
})
export class OurproductsPageComponent {

  taylorShine: object = {
    name: 'Taylor Shine',
    variants: [
      {
        style: 'Brown Leather',
        price: 50,
        sizes: [6, 7, 8, 9],
        main_img: '../../assets/images/taylorshine_brown.jpg',
        inStock: true,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo maxime, voluptas cumque dolorum nulla dolores blanditiis unde? Quasi sint quis, deleniti, aperiam ducimus nobis vel, assumenda ut in sapiente impedit?',
        details:
        {
          material: 'Leather',
          season: 'Spring',
          removableInsole: true,
          heelHeightCm: '2.5cm'
        }
      },
      {
        style: 'Black Leather',
        price: 55,
        sizes: [7, 8, 9],
        main_img: '../../assets/images/taylorshine_black.jpg',
        inStock: false,
        description: 'This is a different description to showcase the specific aspects of this product and this style',
        details:
        {
          material: 'Leather',
          season: 'Spring',
          removableInsole: true,
          heelHeightCm: '2.5cm'
        }
      },
      {
        style: 'Navy Suede',
        price: 60,
        sizes: [7, 8, 9, 10, 11],
        main_img: '../../assets/images/taylorshine_navy.jpg',
        inStock: true,
        // tslint:disable-next-line: max-line-length
        description: 'This shoe is Navy and made of a different material to the others. It also is designed especially with a removable insole.',
        details:
        {
          material: 'Suede',
          season: 'Spring',
          removableInsole: true,
          heelHeightCm: '2.5cm'
        }
      }
    ]
  };

  natleyWhirl: object = {
    name: 'Netley Whirl',
    variants: [
      {
        style: 'Black Leather',
        price: 149.99,
        sizes: [3, 3.5, 4, 5, 6, 7, 8, 9, 10],
        main_img: '../../assets/images/natleywhirl_black.jpg',
        inStock: true,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo maxime, voluptas cumque dolorum nulla dolores blanditiis unde? Quasi sint quis, deleniti, aperiam ducimus nobis vel, assumenda ut in sapiente impedit?',
        details:
        {
          material: 'Leather',
          season: 'Winter',
          removableInsole: false,
          heelHeightCm: '2.5cm'
        }
      },
      {
        style: 'Tan Leather',
        price: 140.99,
        sizes: [3, 3.5, 4, 5, 6, 7, 8, 9, 10],
        main_img: '../../assets/images/natleywhirl_tan.jpg',
        inStock: false,
        description: 'This is a different description to showcase the specific aspects of this product and this style',
        details:
        {
          material: 'Leather',
          season: 'Winter',
          removableInsole: false,
          heelHeightCm: '2.5cm'
        }
      }
    ]
  };

  batcombe: object = {
    name: 'Batcombe Alp GORE-TEX',
    variants: [
      {
        style: 'Dark Brown Nubuck',
        price: 115,
        sizes: [7, 8, 9, 10],
        main_img: '../../assets/images/batcombe_darkbrown.jpg',
        inStock: true,
        // tslint:disable-next-line: max-line-length
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo maxime, voluptas cumque dolorum nulla dolores blanditiis unde? Quasi sint quis, deleniti, aperiam ducimus nobis vel, assumenda ut in sapiente impedit?',
        details:
        {
          material: 'Nubuck',
          season: 'Summer',
          removableInsole: false,
          heelHeightCm: null
        }
      },
      {
        style: 'Brown Leather',
        price: 115,
        sizes: [7, 8, 9, 10],
        main_img: '../../assets/images/batcombe_brown.jpg',
        inStock: false,
        // tslint:disable-next-line: max-line-length
        description: 'These casual outdoor boots are crafted from a brown leather fused with a waterproof GORE-TEX membrane and finished with a lace fastening and hiker inspired D-ring eyelets. The durable rubber outsole with visible cleats offer traction with every step, while the stitch detailing provides the Clarks crafted look. ' ,
        details:
        {
          material: 'Leather',
          season: 'Summer',
          removableInsole: false,
          heelHeightCm: null
        }
      },
      {
        style: 'Black Nubuck',
        price: 115,
        sizes: [7, 8, 9],
        main_img: '../../assets/images/batcombe_black.jpg',
        inStock: false,
        // tslint:disable-next-line: max-line-length
        description: 'These casual outdoor boots are crafted from a brown leather fused with a waterproof GORE-TEX membrane and finished with a lace fastening and hiker inspired D-ring eyelets. The durable rubber outsole with visible cleats offer traction with every step, while the stitch detailing provides the Clarks crafted look. ' ,
        details:
        {
          material: 'Nubuck',
          season: 'Summer',
          removableInsole: false,
          heelHeightCm: null
        }
      }
    ]
  };

  // tslint:disable-next-line: max-line-length
  products: Array<object> = [this.taylorShine, this.natleyWhirl, this.batcombe];

  constructor() { }




}
