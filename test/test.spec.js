import { assert } from 'chai';
import Account from '../src/Account';

describe('BankAccount', () => {
  it('deposit money to my account', () => {
    const account = new Account('John', 8000);
    account.deposit(100);
    assert.equal(8100, account.getBalance());
  });

  it('withdraw money from the account', () => {
    const account = new Account('John', 8000);
    account.withdraw(100);
    assert.equal(7900, account.getBalance());
  });

  it('throw error if the withdraw money is more than the available balance', () => {
    const account = new Account('John', 8000);
    assert.throws(() => account.withdraw(10000), 'In sufficient balance');
  });

});
