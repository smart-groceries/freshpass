class Customer extends Account{
  address: string;
  shoppingLists: ShoppingList[];
 
  constructor(
    address: string,
  	shoppingLists: ShoppingList[]
  ) {
  	this.address = address;
  	this.shoppingLists = shoppingLists;
  }
 
  setAddress(address: string)	{
  	this.address = address;
  }

  setShoppingLists(shoppingLists: ShoppingList[])	{
  	this.shoppingLists = shoppingLists;
  }

  getAddress(): string	{
  	return this.address;
  }
  
  getShoppingLists(): ShoppingList[]	{
  	return this.shoppingLists;
  }

  addShoppingList(shoppingList: ShoppingList)	{
  	this.shoppingLists.push(shoppingList);
  }

  removeShoppingList(shoppingList: ShoppingList)	{
    var index = shoppingLists.indexOf(shoppingList);
  	this.shoppingLists.splice(index,1);
  }

}