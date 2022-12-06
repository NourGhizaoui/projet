import { Component, OnInit } from '@angular/core';
import { MasterService } from '../Services/master.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProducatservicesService } from '../Services/producatservices.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  ProductForm!: FormGroup;
  imgsrc: any;
  Productfield: any;
  constructor(
    private master: MasterService,
    private app: AppComponent,
    private formbuilder: FormBuilder,
    private productapi: ProducatservicesService
  ) {
    this.ProductForm = formbuilder.group({
      productname: formbuilder.control('', [Validators.required]),
      productfield: formbuilder.control('', [Validators.required]),
      productimage: formbuilder.control('', [Validators.required]),
      description :formbuilder.control('', [Validators.required]),
      datefabrication:formbuilder.control('', [Validators.required]),
      dateperemption:formbuilder.control('', [Validators.required]),
      dispo:formbuilder.control('', [Validators.required]),
      marque:formbuilder.control('', [Validators.required]),
      productprice: formbuilder.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.imgsrc = this.app.images[4];

    setInterval(() => {
      this.master.Loginfuncation();
    }, 1000);
    this.Productfield = ['font', 'levres', 'yeux'];
  }

  showPreview(event: any) {
    this.imgsrc = event;
  }

  onSubmit() {
    let productdata = {
      productname: this.ProductForm.value.productname,
      productfield: this.ProductForm.value.productfield,
      description:this.ProductForm.value.description,
      productimage: this.ProductForm.value.productimage,
      datefabrication:this.ProductForm.value.datefabrication,
      dateperemption:this.ProductForm.value.dateperemption,
      dispo:this.ProductForm.value.dispo,
      marque:this.ProductForm.value.marque,
      productprice: Number(this.ProductForm.value.productprice),
    };
    this.productapi.postProducatdata(productdata).subscribe({
      next: (data) => {
        this.ProductForm.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.imgsrc = this.app.images[4];
  }
}
