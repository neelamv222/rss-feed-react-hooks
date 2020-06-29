import React from 'react';
import {shallow} from 'enzyme';
import List from "@material-ui/core/List";
import RssFeedList from './rss-feed-list';
import RssFeedItem from './rss-feed-item'
import Pagination from '../../../common/components/ui-elements/pagination';

describe('Render RssFeedList: ', () => {
  describe('When list data is received', () => {
    let component;
    beforeEach(() => {
      component = shallow(<RssFeedList itemsPerPage={5} totalItems={[1,2,3,4,5,6,7,8,9,10]} />);
    });
  
    test('Should render list: ', () => { 
      expect(component.find(List)).toHaveLength(1);
      expect(component.find(RssFeedItem)).toHaveLength(5);
    });

    test('Should render pagination: ', () => {
      const paginationComp = component.find(Pagination);
      expect(paginationComp).toHaveLength(1);
      expect(paginationComp.prop('currentPage')).toEqual(1);
    });
  });

  describe('When list data is empty', () => {
    let component;
    beforeEach(() => {
      component = shallow(<RssFeedList itemsPerPage={5} totalItems={[]} />);
    });
  
    test('Should show no data received text', () => { 
      expect(component.find('.rss-feed-list').text()).toEqual('No Data To Display');
    });

    test('Should not render pagination: ', () => {
      expect(component.find(Pagination)).toHaveLength(0);
    });
  });
});
