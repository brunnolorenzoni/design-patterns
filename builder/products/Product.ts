export class Product {

    public parts: string[] = [];

    public listParts(): void {
        console.log(`Produce parts: ${this.parts.join(', ')}`);
    }
}