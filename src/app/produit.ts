import { Commenatire } from "./commenatire";

export class Produit {
    constructor(  
        public id:number,      
        public productname:string,
        public productfield:String,
        public productprice:number,
        public dispo:boolean,
        public productimage:string,
        public marque:string,
        public datefabrication:Date,
        public dateperemption:Date,
        public categorie:String,
        public description:String,
        public commentaire:Commenatire[]){
    }
    
}

