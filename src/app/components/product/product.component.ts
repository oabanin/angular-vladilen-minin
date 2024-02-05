import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/product";
import {CurrencyPipe, DecimalPipe, NgClass, NgStyle, NgIf} from "@angular/common";
@Component({
  templateUrl: "./product.component.html",
  selector: "app-product",
  standalone: true,
  imports: [
    DecimalPipe,
    CurrencyPipe,
    NgStyle,
    NgClass,
    NgIf
  ]
})
export class ProductComponent{
  @Input() product: IProduct
  details = false;
  @Input() index: number;
  constructor() {
    this.product = {} as IProduct;
    this.index = 0;
  }

}

