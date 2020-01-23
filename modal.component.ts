import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  public text = '';
  private hidden = true;

  clickMe2() {
    this.hidden = false;
  }

  ngOnInit(): void {
  }

}
