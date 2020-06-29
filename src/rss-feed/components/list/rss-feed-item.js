import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import './rss-feed-item.css';

const RssFeedItem = ({id, title}) => {
  return (
    <ListItem key={`item-${id}`} className='rss-feed-item'>
      <ListItemText primary={title} />
    </ListItem>
    );
}

export default RssFeedItem;
