import React from 'react';
import {shallow} from 'enzyme';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import RssFeedItem from './rss-feed-item'

describe('Render RssFeedItem: ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RssFeedItem id={1} title='dummy title'/>);
  });

  test('Should render ListItem with proper props', () => { 
    const listItem = wrapper.find(ListItem);
    expect(listItem).toHaveLength(1);
  });

  test('Should render ListItemText with proper props', () => { 
    const listItemText = wrapper.find(ListItemText);
    expect(listItemText).toHaveLength(1);
    expect(listItemText.prop('primary')).toEqual('dummy title');
  });
});
