class GroceryEmployee extends Account {
  groceryStore: GroceryStore;
 
  constructor(groceryStore: GroceryStore) {
  	this.groceryStore = groceryStore;
  }
 
  setGroceryStore(groceryStore: GroceryStore)	{
  	this.groceryStore = groceryStore;
  }

  getGroceryStore(): GroceryStore	{
  	return this.groceryStore;
  }
}