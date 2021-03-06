import {Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {Filter} from '../filter';

@Component({
  templateUrl: 'filter.html'
})
export class FilterPopover implements OnInit {

  filter: Filter;

  constructor(private readonly navParams: NavParams,
              private readonly popoverController: PopoverController) {
  }

  ngOnInit() {
    this.filter = this.navParams.get('filter');
  }

  apply({value}) {
    this.popoverController.dismiss(value);
  }
}
