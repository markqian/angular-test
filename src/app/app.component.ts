import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  menu = [
    {
      name: 'ANTIPASTI',
      list:
        [{ name: 'ZUPPA DEL GIORNO', price: '2.99', description: "" },
        { name: 'OLIVES', price: '62.99', description: "" },
        { name: 'BRUSCHETTA POMODORO', price: '23.99', description: "" },
        { name: 'MEATBALL APPETIZER', price: '22.99', description: "" },
        { name: 'CALAMARI GRIGLIA ALLA PUTTANESCA', price: '12.99', description: "" }]
    },

    {
      name: 'INSALATE',
      list:
        [{ name: 'INSALATA ROMA', price: '2.99', description: "" },
        { name: 'INSALATA CESARE', price: '62.99', description: "" },
        { name: 'PIZZA FUNGHI', price: '23.99', description: "" },
        { name: 'INSALATA MISTA', price: '22.99', description: "" },
        { name: 'PENNE ALLA NORMA', price: '12.99', description: "" }]
    },
    {
      name: 'PASTA',
      list:
        [{ name: 'LINGUINI DI MARE', price: '2.99', description: ""  },
        { name: 'LINGUINI POLLO PESTO', price: '9.99', description: ""  },
        { name: 'RIGATONI BOLOGNESE', price: '3.99', description: ""  },
        { name: 'INSALATA MISTA', price: '7.99', description: ""  },
        { name: 'RIGATONI BOLOGNESE', price: '12.99', description: ""  }]
    },
    {
      name: 'PIZZA',
      list:
        [{ name: 'PIZZA QUATTRO STAGIONI', price: '2.99', description: ""  },
        { name: 'PIZZA PROSCIUTTO', price: '6.99', description: ""  },
        { name: 'PIZZA SALSICCIA ITALIANA', price: '13.99', description: ""  },
        { name: 'PIZZA DIAVOLO', price: '2.99', description: ""  },
        { name: 'PIZZA FUNGHI', price: '1.99', description: ""  }]
    }

  ]
}
