import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal: { Buttons: (arg0: { createOrder: (data: any, action: any) => any; onApprove: (data: any, actions: any) => Promise<void>; onError: (err: any) => void; }) => { (): any; new(): any; render: { (arg0: any): void; new(): any; }; }; };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'panaderiaWeb';

  
  

  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  producto={
    descripcion:'pan glaseado',
    precio:30,
    img:'img-pan-glaseado'

  }
RegisterLogin: any;

  ngOnInit(): void {
    paypal.
    Buttons({
      createOrder:(data,action)=>{
        return action.order.create({
          purchase_units:[
            {
              description:this.producto.descripcion,
              amount:{
                currency_code:'MXN',
                value:this.producto.precio
              }
            }
          ]          
        })
      },
      onApprove: async(data, actions)=>{
        const order = await actions.order.capture();
        console.log(order)
      },
      onError:err=>{
        console.log(err)
      }
    }).
    render(this.paypalElement.nativeElement)
  }
  
  url: string = "../assets/img1.jpg";
  imageChange(event: any){
      this.url = event.target.src;
}
}
