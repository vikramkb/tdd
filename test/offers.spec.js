import { assert } from 'chai';
import Loan from '../src/loan';
import Account from '../src/account';
import sinon from 'sinon';

describe('loans', () => {

  let sandbox;
  beforeEach("loans", () => {
    sandbox = sinon.sandbox.create();
  });

  afterEach("loans", () => {
    sandbox.restore();
  });

  it("should return the eligible personal loan amount", () => {
    const account = new Account();
    const loan = new Loan(account);
    sandbox.stub(account, "getBalance").returns(100001);
    const amount = loan.eligiblePersonalLoanAmount();
    assert.equal(100000, amount);
  });
  it("deposit sanction loan amount", () => {
    const account = new Account();
    const loan = new Loan(account);
    const depositMock = sandbox.mock(account).expects("deposit").withExactArgs(1000);
    loan.transferSanctionAmount(1000);
    depositMock.verify();
  });
});