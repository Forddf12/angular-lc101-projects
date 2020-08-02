import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Changing Things Up';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzjXpI_QyE1V_BbyV042JIbaJd6tQ7C2aggQ&usqp=CAU'
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTvOIhul-mf3js8fDEm10i15FdKYADIOMejA&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}