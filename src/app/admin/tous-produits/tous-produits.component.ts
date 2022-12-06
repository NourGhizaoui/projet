import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Produit } from 'src/app/produit';
import { CartService } from '../Services/cart.service';
import { MasterService } from '../Services/master.service';
import { ProducatservicesService } from '../Services/producatservices.service';
import { RegistrationService } from '../Services/registration.service';

@Component({
  selector: 'app-tous-produits',
  templateUrl: './tous-produits.component.html',
  styleUrls: ['./tous-produits.component.css']
})
export class TousProduitsComponent {
  constructor(
    private master: MasterService,
    private api: RegistrationService,
    private Productapi: ProducatservicesService,
    private app: AppComponent,
    private cart: CartService,
    private router: Router,
    private build:FormBuilder,
  ) {}

  Producatdata = new Array();
  Mobiledata = new Array();
  Fashiondata = new Array();
  Electronicsdata = new Array();
  AllData: any;
  SpinnerActive: boolean = true;
  dataloader: boolean = false;
  Spinner: string = 'assets/spinner/loading.gif';
  User_id: number = 0;
  Userdata: any;
  Cartdata: any;

  prod:Produit | undefined;
  idprod:number | undefined;
  lesproduits:Produit[] | undefined;
  form!:FormGroup;
  base64:any = '';

  ngOnInit(): void {
    this.form = this.build.group({
      productname: ['' , [Validators.required]],
      productprice: ['', [Validators.required]],
      marque: ['' , [Validators.required]]
     // image: ['', [Validators.required]]
     
     
    })




    this.Spinnnerfunctions();
    this.get_alldata();
    this.CARTDATA();

    setInterval(() => {
      this.CARTDATA();
    }, this.app.STIME);
  }

  Spinnnerfunctions() {
    this.grtProductdata();
    setInterval(() => {
      this.SpinnerActive = false;
      this.dataloader = true;
    }, this.app.time);
  }

  //Registration all UserData
  get_alldata() {
    this.api.getUserdata().subscribe({
      next: (data) => {
        this.Userdata = data;
        //UserData Functions
        this.UserDataFunction();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  UserDataFunction() {
    for (let i = 0; i < this.Userdata.length; i++) {
      if (this.Userdata[i].User_id == localStorage.getItem('token')) {
        this.User_id = this.Userdata[i].id;
        break;
      }
    }
  }

  // Productdata
  grtProductdata() {
    this.Productapi.getProducatdata().subscribe({
      next: (data) => {
        this.Producatdata = data;
        this.UpdateData();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // Update product data Array
  UpdateData() {
    if (this.Producatdata != undefined) {
      for (let i = 0; i < this.Producatdata.length; i++) {
        if (this.Producatdata[i].productfield == 'font') {
          this.Mobiledata.push(this.Producatdata[i]);
        } else if (this.Producatdata[i].productfield == 'levres') {
          this.Fashiondata.push(this.Producatdata[i]);
        } else if (this.Producatdata[i].productfield == 'yeux') {
          this.Electronicsdata.push(this.Producatdata[i]);
        }
      }
      let dublicatedata = new Array();
      this.AllData = dublicatedata.concat(
        this.Electronicsdata,
        this.Mobiledata,
        this.Fashiondata
      );
    }
  }

  // Add ton Cartdata Functions
  /*addcart(item: number) {
    if (
      localStorage.getItem('token') !== undefined &&
      localStorage.getItem('token') !== null
    ) {
      this.CARTDATA();
      let on: boolean = false;

      for (let i = 0; i < this.Producatdata.length; i++) {
        if (this.Producatdata[i].id == item) {
          if (this.Cartdata.length != 0) {
            for (let j = 0; j < this.Cartdata.length; j++) {
              if (
                this.Cartdata[j].User_id == this.User_id &&
                this.Cartdata[j].Product_id == this.Producatdata[i].id
              ) {
                on = true;
                break;
              }
            }

            if (on === false) {
              if (this.User_id != 0) {
                let cart_data = {
                  Product_id: this.Producatdata[i].id,
                  Productname: this.Producatdata[i].productname,
                  Productfield: this.Producatdata[i].productfield,
                  Productimage: this.Producatdata[i].productimage,
                  Productprice: this.Producatdata[i].productprice,
                  User_id: this.User_id,
                  CountProduct: 1,
                };
                this.cart.postCart(cart_data).subscribe({
                  next: (data) => {},
                  error: (err) => {
                    console.log(err);
                  },
                });
              }
            }
          } else if (this.Cartdata.length == 0) {
            let cart_data = {
              Product_id: this.Producatdata[i].id,
              Productname: this.Producatdata[i].productname,
              Productfield: this.Producatdata[i].productfield,
              Productimage: this.Producatdata[i].productimage,
              Productprice: this.Producatdata[i].productprice,
              User_id: this.User_id,
              CountProduct: 1,
            };
            this.cart.postCart(cart_data).subscribe({
              next: (data) => {},
              error: (err) => {
                console.log(err);
              },
            });
          }
          break;
        }
      }
    }else{
      this.router.navigate(['/cart']);
    }
  }
*/
  CARTDATA() {
    this.cart.getCart().subscribe({
      next: (data) => {
        this.Cartdata = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  
  produitradiobutton: string='';
  searchText: string = '';
  
  onSearchTextentered(searchvalue: string){
   this.searchText=searchvalue;
   //console.log(this.searchText);
}
supprimer(id:number)
{
 /* this.Productapi.deleteProducatdata(prod.id).subscribe(
    (data)=> (this.Producatdata = this.Producatdata.filter((e)=>e.id != prod.id))
  );*/

  this.Productapi.deleteProducatdata(id)
.subscribe(
  (data)=> (this.Producatdata = this.Producatdata.filter((e)=>e.id != id))
);

  alert("suppression ok");
}

getImagePath(event:any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
     this.base64 = reader.result;
     this.form.get('productimage')?.setValue(this.base64)
     console.log(this.base64)
  };
}
update(item:any) {
  
  /*this.form.patchValue({
    productname: item.productname,
    productprice: item.productprice,
    productfield: item.productfield
  
    
  })*/

  this.form.get('productname')?.setValue(item.productname)
  this.form.get('productprice')?.setValue(item.productprice)
  this.form.get('marque')?.setValue(item.marque)

}


modifier(){
  const model = this.form.value;
  this.Productapi.putProducatdata(model).subscribe(res => {
    alert("modification Product Success")
})}
}
