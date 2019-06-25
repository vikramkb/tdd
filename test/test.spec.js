import { assert } from 'chai';
import Account from "../src/Account";

describe('BankAccount', () => (
  it('deposit money to my account', () => {
    const account = new Account('John', 8000);
    account.deposit(100);
    assert.equal(8100, account.getBalance());
  })
));