import { Product } from "../products/Product";
import { Builder } from "./Builder";

export class ConcreteBuilder implements Builder {
    
    private product: Product;

    constructor() {
        this.reset();
    }

    producePartA(): void {
        this.product.parts.push('PartA1');
    }
    producePartB(): void {
        this.product.parts.push('PartB1');
    }
    producePartC(): void {
        this.product.parts.push('PartC1');
    }

    reset(): void {
        this.product = new Product();
    }

    public getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}