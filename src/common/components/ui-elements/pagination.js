import React from 'react';
import Button from "@material-ui/core/Button";
import AutoDependency from '../form-elements/auto-dependency';
import './pagination.css'

// Pagination component
const Pagination = ({next, previous, maxPage, currentPage, goTo}) => {
  const showLeftArrows = currentPage <= 1;
  const showRightArrows = currentPage >= maxPage;

  return (
    <div className='pagination'>
      <AutoDependency dependencies={showLeftArrows}>
        <Button className='pagination__button' variant="contained" color="secondary" onClick={() => goTo(1)}>
        &#8606;
        </Button>
      </AutoDependency>
      <AutoDependency dependencies={showLeftArrows}>
        <Button className='pagination__button' variant="contained" color="secondary" onClick={previous}>
        &#8592;
        </Button>
      </AutoDependency>
      <AutoDependency dependencies={showRightArrows}>
        <Button className='pagination__button' variant="contained" color="primary" onClick={next}>
        &#8594;
        </Button>
      </AutoDependency>
      <AutoDependency dependencies={showRightArrows}>
        <Button className='pagination__button' variant="contained" color="primary" onClick={() => goTo(maxPage)}>
        &#8608;
        </Button>
      </AutoDependency>
    </div>
  );
}

export default Pagination;
