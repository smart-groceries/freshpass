class GroceryStore {
  storeCatalog: Item[];
  groceryStoreId: number;

  constructor(
    storeCatalog: Item[],
  	groceryStoreId: number
  ) {
    this.storeCatalog = storeCatalog;
  	this.groceryStoreId = groceryStoreId;
  }
 
  setStoreCatalog(storeCatalog: Item[])	{
  	this.storeCatalog = storeCatalog;
  }

  setGroceryStoreId(groceryStoreId: number)	{
  	this.groceryStoreId = groceryStoreId;
  }

  getStoreCatalog(): Item[]		{
  	return this.storeCatalog;
  }
  
  getGroceryStoreId(): number	{
  	return this.groceryStoreId;
  }

  addItem(item: Item)	{
  	this.storeCatalog.push(item);
  }

  removeItem(item: Item)	{
    var index = storeCatalog.indexOf(item);
  	this.storeCatalog.splice(index,1);
  }
}