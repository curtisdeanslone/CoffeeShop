import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class ProductComponent implements OnInit {
  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
