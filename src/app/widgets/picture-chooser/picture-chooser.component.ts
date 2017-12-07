import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picture-chooser',
  templateUrl: './picture-chooser.component.html',
  styleUrls: ['./picture-chooser.component.scss']
})
export class PictureChooserComponent implements OnInit {

  @Input() title: string;       //@Input() marking title as something that will be gotten from somewhere else
  @Input() images: Image[];

  @Output() selected = new EventEmitter<Image>();

  constructor() { }

  ngOnInit() {
  }

  select(e: MouseEvent, img: any){
    e.preventDefault();
    this.selected.emit(img);
    this.images = null;
  }
}

export class Image{
  id: string;
  src: string;  //thumbnail
  link: string; //full resolution picture
}