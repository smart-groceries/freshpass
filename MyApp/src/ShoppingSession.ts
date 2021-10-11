class ShoppingSession {
  currentCart: Item[];
  state: number;
  sessionToken: string;
  store: GroceryStore;
    
  constructor(
  	currentCart: Item[],
  	state: number,
  	sessionToken: string,
 	store: GroceryStore
  ) {
  	this.currentCart = currentCart;
  	this.state = state;
  	this.sessionToken = sessionToken;
  	this.store = store;
  }

  setCurrentCart(currentCart: Item[])	{
  	this.currentCart = currentCart;
  }

  setState(state: number)	{
  	this.state = state;
  }

  setSessionToken(sessionToken: string)	{
  	this.sessionToken = sessionToken;
  }

  setStore(store: GroceryStore)	{
  	this.store = store;
  }

  getcurrentCart(): Item])	{
  	return this.currentCart;
  }

  getstate(): number	{
  	return this.state;
  }

  getsessionToken(): string	{
  	return this.sessionToken;
  }
  
  getstore(): GroceryStore	{
  	return this.store;
  }

  addItem(item: Item)	{
  	this.currentCart.push(item);
  }

  removeItem(item: Item)	{
    var index = currentCart.indexOf(item);
  	this.currentCart.splice(index,1);
  }

}