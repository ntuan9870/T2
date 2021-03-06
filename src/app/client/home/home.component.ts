import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Promotion } from 'src/app/models/promotion.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { RecommenedService } from 'src/app/services/recommened.service';
declare function showSwal(type,message):any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user_id='';
  user_name='';
  allProduct = new BehaviorSubject<Product[]>(null);
  products:Product[];
  allPromotion = new BehaviorSubject<Promotion[]>(null);
  allPromotionF = new BehaviorSubject<Promotion[]>(null);
  allPromotionR = new BehaviorSubject<Promotion[]>(null);
  promotions:Promotion[];
  promotionsF:Promotion[];
  promotionsR:Promotion[];
  allProductFeatured = new BehaviorSubject<Product[]>(null);
  allProductRecommend = new BehaviorSubject<Product[]>(null);
  productsFeatured:Product[];
  productsrecommend:Product[];
  public loading = true;
  constructor(private recommendservice:RecommenedService,private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('user_name')){
      this.user_name = sessionStorage.getItem('user_name');
      this.user_id = sessionStorage.getItem('user_id');
      // this.checklogin = true;
    }else{
      if(localStorage.getItem('user_name')){
        this.user_name = localStorage.getItem('user_name');
        this.user_id = localStorage.getItem('user_id');
        // this.checklogin = true;
      }else{
        // this.checklogin = false;
      }
    }
    this.getNewProduct();
    this.getFeaturedProduct();
    this.getRecommendProduct();
  }

  getNewProduct(){
    this.productService.getNewProduct(12).subscribe(
      res=>{
        var r:any = res;
        this.allProduct.next(r.products);
        this.allPromotion.next(r.promotions);
      },
      error=>{
        alert('C?? l???i trong qu?? tr??nh x??? l?? th??ng tin!');
      }
    );
    this.allProduct.subscribe(
      res=>{
        this.products = res;
      },
      error=>{
        alert('C?? l???i trong qu?? tr??nh x??? l?? th??ng tin!');
      }
    );
    this.allPromotion.subscribe(res=>{
      this.promotions=res;
    });
  }
  getFeaturedProduct(){
      this.productService.getFeaturedProduct(12).subscribe(
        res=>{
          var r:any = res;
          this.allProductFeatured.next(r.products);
          this.allPromotionF.next(r.promotions);
          this.loading = false;
        },
        error=>{
          this.loading = false;
          alert('C?? l???i trong qu?? tr??nh truy xu???t d??? li???u!');
        }
      );
      this.allProductFeatured.subscribe(
        res=>{
          this.productsFeatured = res;
        },
        error=>{
          alert('C?? l???i trong qu?? tr??nh x??? l?? d??? li???u!');
        }
      );
      this.allPromotionF.subscribe(res=>{
        this.promotionsF=res;
      });
  }
  getRecommendProduct(){
    // console.log(this.user_id);
    // this.loading = true;
    if(this.user_id!=''){
      this.recommendservice.getRecommend(this.user_id).subscribe(
        res=>{
          var r:any = res;
          this.allProductRecommend.next(r.products);
          this.allPromotionR.next(r.promotions);
          // this.productsrecommend=res['products'];
          // this.promotions=res['promotions'];
          this.loading = false;
          console.log(this.productsrecommend);
        },
        error=>{
          this.loading = false;
          alert('C?? l???i trong qu?? tr??nh x??? l?? th??ng tin!');
        }
      );
      this.allProductRecommend.subscribe(
        res=>{
          this.productsrecommend = res;
        },
        error=>{
          alert('C?? l???i trong qu?? tr??nh x??? l?? th??ng tin!');
        }
      );
      this.allPromotionR.subscribe(res=>{
        this.promotionsR=res;
      });
    }
  }
  addtocart(p:Product,promotion:number){
    this.cartService.addtocart(p,promotion);
    showSwal('auto-close','Th??m s???n ph???m v??o gi??? h??ng th??nh c??ng!');
  }

}
