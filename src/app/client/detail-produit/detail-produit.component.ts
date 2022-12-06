import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/produit';

import { ProducatservicesService } from '../Services/producatservices.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent {
  idProd!: number;
  produit!: Produit | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serv: ProducatservicesService,private fb:FormBuilder
  ) {}


  lesEmployes!:Produit[];
  employeForm!:FormGroup;

  ngOnInit(): void {
    this.idProd = this.activatedRoute.snapshot.params['id'];
    this.serv
      .getproduitbyid(this.idProd)
      .subscribe((data) => (this.produit = data));
this.createForm();
  }

  createForm(){
    this.employeForm = this.fb.nonNullable.group({
      commentaire:this.fb.array([])
    })
  }
  
  get lesCommentaires(){
    return this.employeForm.get('commentaire') as FormArray;
  }

  ajouterDiplome(){
    this.lesCommentaires.push(this.fb.group({
     email:[''],
     message:['']
    }))
  }

  ajouterAcc(){
    this.serv.ajoutercomment(this.employeForm.value, this.idProd).subscribe(data=>this.lesCommentaires.push(data));
    alert("ajout true");
  }



}
