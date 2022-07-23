//קומפוננטה לתצוגת פריט בודד בסל הקניות
//קומפוננטת הסל המלא תכיל שכפול של קומפונטה זו כמספר הפריטים שהמשתמש בחר להכניס לסל
import { Component, Input, OnInit } from '@angular/core';
import { Busket } from 'src/Classes/busket';

@Component({
  selector: 'app-item-in-busket',
  templateUrl: './item-in-busket.component.html',
  styleUrls: ['./item-in-busket.component.css']
})
export class ItemInBusketComponent implements OnInit {
  //אובייקט שיקבל בכל סיבוב של הלולאה את הסל הנוכחי ויציג את הנתונים שלו
  @Input() myItem:Busket;
  constructor() { }

  ngOnInit() {
  }

}
