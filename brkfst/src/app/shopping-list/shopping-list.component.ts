import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  pageTitle: string;

  constructor() { }

  ngOnInit() {
    this.pageTitle = 'Shopping list';
  }

}
