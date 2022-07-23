import { OrderDetails } from "./order-details";
import { Orders } from "./orders";

export class Buying {
    constructor(
        public order:Orders,
        public orderDetails:Array<OrderDetails>
    ){}
}
