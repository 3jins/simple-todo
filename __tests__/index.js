import React from 'react';
import expect from 'expect';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/client/components/App';

describe('App', () => {
  beforeAll(() => {
    configure({ adapter: new Adapter() });
  });
  it('App renders hello world', () => {
    const app = shallow(<App />);
    console.log(app);
    console.log(app.find('div'));
    console.log(app.find('div').text());
    expect(app.find('div').text()).toEqual('Hello world!');
  });
});
