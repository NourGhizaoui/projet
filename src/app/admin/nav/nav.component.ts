import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CartService } from '../Services/cart.service';
import { MasterService } from '../Services/master.service';
import { RegistrationService } from '../Services/registration.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(
    private app: AppComponent,
    private master: MasterService,
    private api: RegistrationService,
    private cart: CartService,
  private router:Router
  ) {}
  Title: any;
  myImage: any;
  login_Active: boolean = false;
  login_Not_Active: boolean = true;
  Userdata: any;
  HOMEUSERACTIVE: boolean = false;
 CartdataCount: number = 0;
  Cartdata: any;
  User_id: number = 0;
  NewCartdata = new Array<any>();
  entersearchvalue:string='';


  ngOnInit(): void {
    this.Title = this.app.title;
    this.myImage = this.app.images[1];
    this.get_alldata();
    this.CARTDATA();
    setInterval(() => {
      this.checkfiunction();
      if (localStorage.getItem('token') != null) {
        if (localStorage.getItem('token') == this.Userdata[0].User_id) {
          this.HOMEUSERACTIVE = true;
        } else {
          this.HOMEUSERACTIVE = false;
        }
      }
    }, 1);

    setInterval(() => {
      this.CARTDATA();
    }, this.app.time);
  }
  produitradiobutton: string='';
  searchText: string = '';
  onSearchTextentered(searchvalue: string){
    this.searchText=searchvalue;
    //console.log(this.searchText);
 }

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>;
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.entersearchvalue);
  }

  checkfiunction() {
    if (localStorage.getItem('token') != null) {
      this.login_Active = true;
      this.login_Not_Active = false;
    } else {
      this.login_Not_Active = true;
      this.login_Active = false;
    }
  }

  get_alldata() {
    this.api.getUserdata().subscribe({
      next: (data) => {
        this.Userdata = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  CARTDATA() {
    this.cart.getCart().subscribe({
      next: (data) => {
        this.Cartdata = data;
        this.UserCartDataCart();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  UserCartDataCart() {
    if (this.Cartdata != undefined && this.Userdata != undefined) {
      for (let i = 0; i < this.Userdata.length; i++) {
        if (this.Userdata[i].User_id == localStorage.getItem('token')) {
          this.User_id = this.Userdata[i].id;
        }
      }
      this.CaratCase();
    }
  }

  CaratCase() {
    let UserCartData = new Array();
    for (let i = 0; i < this.Cartdata.length; i++) {
      if (this.Cartdata[i].User_id == this.User_id) {
        UserCartData.push(this.Cartdata[i]);
      }
    }
    this.CartdataCount = UserCartData.length;
  }

  Logout() {
    localStorage.removeItem('token');
    this.master.Loginfuncation();
  }

  decoonect()
  {
    this.router.navigate(['admin']);
  }

}
