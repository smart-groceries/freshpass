class Account {
  name: string;
  accountId: number;
 
  constructor(
  name: string,
  accountId: number
  ) {
  	this.name = name;
  	accountId = number;
  }

  setName: (name: string)	{
  	this.name = name;
  }

  setAccountId: (accountId: number)	{
  	this.accountId = accountId;
  }
 
  getName()	{
  	return this.name;
  }
  
  getAccountId: (accountId: number)	{
  	return this.accountId;
  }
}