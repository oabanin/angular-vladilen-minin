import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {FilterProductsPipe} from "../../pipes/filter-products.pipe";
import {ProductComponent} from "../../components/product/product.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {CreateProductComponent} from "../../components/create-product/create-product.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    AsyncPipe,
    FilterProductsPipe,
    ProductComponent,
    ModalComponent,
    CreateProductComponent,
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  title = 'angular';
  // products:IProduct[] =data;
  loading = false;
  term = ""

  // products$: Observable<IProduct[]>

  constructor(public productsService: ProductsService, public modalService: ModalService) {
    // this.products$ = {} as Observable<IProduct[]>;
  }

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService.getAll()
    //   .pipe(tap(() => this.loading = false));
    this.productsService.getAll().subscribe(()=>{
      this.loading = false;
    })
  }
}
