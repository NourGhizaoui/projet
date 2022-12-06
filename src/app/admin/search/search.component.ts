import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  ngOnInit(): void {
  }


  
  entersearchvalue:string='';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>;
  
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.entersearchvalue);
  }
  
}
