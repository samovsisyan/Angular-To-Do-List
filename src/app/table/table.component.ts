// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }


import { Component, OnInit  } from '@angular/core';

import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  firstname: string;
  isCollapsed: boolean = true;
  values = '';
  tempData = [];

  val = [];

  value: string = "";
  value1: string = "";
  value2: string = "";

  inputDisabled: boolean = true;


  products = [
    {
      id: 1,
      firstname: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754
    },
    {
      id: 2,
      firstname: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199
    },
    {
      id: 3,
      firstname: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463
    },
    {
      id: 4,
      firstname: 'China',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397
    }
  ];

  public newcountry = {
    id: 0,
    firstname: '',
    flag: '',
    area: 0,
    population: 0
  };


  constructor() {
  }

  ngOnInit() {
    console.log(this.newcountry)
  }
  Search(){
    this.products = this.products.filter(res => {
      return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
    });
  }


  deleteMsg(i) {
    console.log(i);
    this.products.splice(i, 1);
  }

  deleteAdd(i) {
    console.log(i);
    this.val.splice(i, 1);
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }


  // createToDo() {
  //   this.val.push(this.values);
  //   console.log(this.val);
  // }
  //
  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  // }


  // clickValue () {
  //   console.log(changeText);
  // }

  clickAdd() {
    this.newcountry.id = this.products[this.products.length - 1].id + 1;
    this.products.push(this.newcountry);
    console.log(this.val);
  }



  editTable() {
    // this.products[i]
    // console.log(this.products[i]);
    // console.log(this.products[i].firstname);
    // console.log(this.products[i].area);
    // console.log(this.products[i].population);
  }




}






interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}






