import React from 'react';
import List from "@material-ui/core/List";
import Pagination from '../../../common/components/ui-elements/pagination';
import usePagination from '../../../common/hooks/pagination-hook';
import RssFeedItem from './rss-feed-item'

import './rss-feed-list.css';
 
const RssFeedList = ({totalItems, itemsPerPage}) => {
  const {next, previous, maxPage, currentPage, currentPageData, goTo} = usePagination(totalItems, itemsPerPage);
  const currentItems = currentPageData();

  const renderFeedList = () => 
    (
      <List className='lists' currentPage={currentPage}>
        {
          currentItems.map((item, index) => (
            <RssFeedItem
                  key={index}
                  id={index}
                  title={item.title}
                />
              )
          )
        }
      </List>
    );

  if (!totalItems.length) {
    return <div className='rss-feed-list'>No Data To Display</div>
  }

  return (
    <div className='rss-feed-list'>
      {renderFeedList()}
      <Pagination 
        next={next}
        previous={previous}
        maxPage={maxPage}
        currentPage={currentPage}
        goTo={goTo}
      />
    </div>
    );
  
}

export default RssFeedList;
