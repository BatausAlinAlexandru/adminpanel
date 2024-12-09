import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product = {
    id: '',
    name: '',
    price: 0,
    description: '',
    stoc: 0,
    discount: 0,
    pathFoto: '',
  };

  @ViewChild('editModal', { static: true }) editModal!: TemplateRef<any>;

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  editProduct(product: Product) {
    this.selectedProduct = { ...product };
    this.openEditModal();
  }

  openEditModal() {
    this.modalService.open(this.editModal);
  }

  saveProduct(modal: any) {
    this.productService.updateProduct(this.selectedProduct).subscribe(() => {
      this.loadProducts();
      modal.close();
    });
  }

  deleteProduct(id: string) {
    if (confirm('Ești sigur că dorești să ștergi acest produs?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }
}
