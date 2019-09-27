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

  clickAdd(value,value1, value2) {
    this.val.push(value,value1, value2);
    console.log(this.val);

  }



  editTable(i) {
    this.products[i]
    console.log(this.products[i]);
    console.log(this.products[i].firstname);
    console.log(this.products[i].area);
    console.log(this.products[i].population);

  }






  // addHero(newHero: string) {
  //   for (let index = 0; index < this.products.length; index++){
  //     if (this.products[index].firstname == "Russia") {
  //       this.tempData.push(this.products);
  //     }
  //   }
  //   this.products = this.tempData;
  //   console.log(this.tempData);
  //   // if (newHero) {
  //   //   this.products.push(newHero);
  //   // }
  // }



//   addHero(value) {
// const arr = [];
// arr.push(value)
//     console.log(arr);
//   }



  // heroes = [];
  // addHero(newHero: string) {
  //   if (newHero) {
  //     this.heroes.push(newHero);
  //   }
  // }


}








interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}






