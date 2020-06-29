import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import RssFeed from './rss-feed/pages/rss-feed';

enzyme.configure({adapter: new Adapter()});

test('CheckboxWithLabel changes the text after click', () => {
  const component = shallow(<App />);
  expect(component.find(RssFeed)).toHaveLength(1);
});