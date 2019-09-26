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

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

export class TableComponent implements OnInit {

  firstname: string;


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




  constructor() {
  }

  ngOnInit() {
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


}















