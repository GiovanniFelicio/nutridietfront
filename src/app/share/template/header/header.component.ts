import { ActivatedRoute } from '@angular/router';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = '';

  constructor(private headerService: HeaderService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.headerService.title.subscribe(title => {
      this.title = title;
    });

    this.activatedRoute.data.subscribe(data => {
      console.log(data);
    })
  }

}
