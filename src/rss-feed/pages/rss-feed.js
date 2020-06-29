import React, { useState } from 'react';
import RssFeedForm from '../components/form/rss-feed-form';
import RssFeedList from '../components/list/rss-feed-list';
import Modal from '../../common/components/ui-elements/modal';
import Button from "@material-ui/core/Button";
import withLoader from '../../common/components/ui-elements/loader';
import useModal from '../../common/hooks/modal-hook';
import {CORS_PROXY, ITEMS_PER_PAGE} from '../../constants/constants';
import './rss-feed.css';

const RssFeedsListWithLoader = withLoader(RssFeedList);

function RssFeed() {
  
  // State hooks
  const [showLoader, setShowLoader] = useState(false);
  const [paginationData, setPaginationData] = useState(
    {totalItems: [], itemsPerPage: ITEMS_PER_PAGE, totalPages: 0}
  );


  // Modal hook
  const {modalVisibility, showModal, hideModal} = useModal();

  // Handler for onSubmit button
  const onFormSubmit = async (feedUrl) => {
    const Parser = require("rss-parser");
    const parser = new Parser();
    setShowLoader(true);
    setPaginationData((prevState) => ({
      ...prevState, totalItems: []
    }));
    try {
      let feeds = await parser.parseURL(`${CORS_PROXY}${feedUrl}`);
      setPaginationData((prevState) => ({
        ...prevState, totalItems: feeds.items
      }));
    } catch (err) {
      console.log(err); 
      showModal();
    }
    setShowLoader(false);
  };

  const {totalItems, itemsPerPage} = paginationData;

  return (
    <div className='rss-feed'>
      <Modal
        show={modalVisibility}
        onCancel={hideModal}
        header='Oops Error Occurred'
        contentClass="rss-feed__modal-content"
        footerClass="rss-feed__modal-actions"
        footer={<Button className='rss-feed__footer-close' variant="contained" color="primary" onClick={hideModal}>CLOSE</Button>}
      >
        Not Found :( . Please try another Url. Check console log for more info.
      </Modal>
      <RssFeedForm 
        onFormSubmit={onFormSubmit}
      />
      <RssFeedsListWithLoader 
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        isLoading={showLoader}
      />
    </div>
  );
}

export default RssFeed;
