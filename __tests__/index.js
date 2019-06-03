import React from 'react';
import expect from 'expect';
import renderer from 'react-test-renderer';
import App from '../src/client/components/App';

describe('App', () => {
  it('App renders hello world', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    console.log(json);
    expect(json).toMatchSnapshot();
  });
});
