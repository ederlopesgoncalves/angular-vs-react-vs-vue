import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @Input() msg: string;
  legenda: string = "Angular";

  constructor() {}

  ngOnInit(): void {}

  resetLegenda(): void {
    this.legenda = "Angular";
  }
}
