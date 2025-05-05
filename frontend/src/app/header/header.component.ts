import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  date = new Date()

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000)
  }

  formatTime(){
    return this.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  formatDate(){
    return this.date.toLocaleDateString([], { weekday: "long", day: "numeric", month: "long" })
  }
}
