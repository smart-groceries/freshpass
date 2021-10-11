class Items {
  barcode: number;
  name: string;
  price: number;
  aisle: string;
  weight: number;

  constructor(
    barcode: number,
  	name: string,
  	price: number,
  	aisle: string,
  	weight: number
  ) {
  	this.barcode = barcode;
  	this.name = name;
  	this.price = price;
  	this.aisle = aisle;
  	this.weight = weight;
  }

  setBarcode(barcode: number)	{
  	this.barcode = barcode;
  }

  setName(name: string)	{
  	this.name = name;
  }

  setPrice(price: number)	{
  	this.price = price;
  }

  setAisle(aisle: string)	{
  	this.aisle = aisle;
  }

  setWeight(weight: number)	{
  	this.weight = weight;
  }

  getBarcode(): number	 {
  	return this.barcode;
  }

  getName(): string		{
  	return this.name;
  }

  getPrice(): number	{
  	return this.price;
  }

  getAisle(): string	{
  	return this.aisle;
  }
  
  getWeight(): number	{
  	return this.weight;
  }

}