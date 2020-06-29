import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AutoDependency from '../../../common/components/form-elements/auto-dependency';
import './rss-feed-form.css';

function RssFeedForm({onFormSubmit}) {
  const [urlInput, setUrlInput] = useState('');
  const onUrlInputChange = (e) => {
    setUrlInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(urlInput);
  }
  return (
    <form className="rss-feed-form" noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField className='rss-feed-form__url-input' label="Feed Url" onChange={onUrlInputChange} value={urlInput}/>
      <AutoDependency dependencies={[urlInput]}>
        <Button className='rss-feed-form__submit' variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </AutoDependency>
    </form>
  );
}

export default RssFeedForm;