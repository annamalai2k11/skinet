import { Component, OnInit, Input } from '@angular/core';
import { ShopParams } from '../../models/shopParams';

@Component({
  selector: 'app-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrls: ['./pagination-header.component.scss']
})
export class PaginationHeaderComponent implements OnInit {
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() totalCount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
