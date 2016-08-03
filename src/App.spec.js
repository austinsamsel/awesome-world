import React, { Component } from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';
import App from './App';

chai.use(chaiEnzyme());

describe('the environment', () => {
  it('works, hopefully', () => {
    expect(true).to.be.true;
  });
});
