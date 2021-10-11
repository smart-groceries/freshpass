class ShoppingList {
  id: number;
  currentCart: Item[];

  constructor(
    id: number,
  	currentCart: Item[]
  ) {
  	this.id = id;
  	this.currentCart = currentCart;
  }

  setId(id: number)	{
  	this.id = id;
  }
  
  setCurrentCart(currentCart: Item[])	{
  	this.currentCart = currentCart;
  }

  getId(): number	{
  	return this.id;
  }

  getCurrentCart(): Item[]	{
  	return this.currentCart;
  }

  addItem(item: Item)	{
  	this.currentCart.push(item);
  }

  removeItem(item: Item)	{
    var index = currentCart.indexOf(item);
  	this.currentCart.splice(index,1);
  }
}