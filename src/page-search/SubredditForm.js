import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import * as S from './SubredditForm.style';
import Button from '../common/button';
import Spinner from './Spinner';
import { useFetchPosts } from '../utils/useFetchPosts';

import { API_URL } from '../config';

function SubredditForm() {
  const { subreddit: defaultSubreddit } = useParams();
  const [subreddit, setSubreaddit] = useState(defaultSubreddit);
  const [showSpinner, setShowSpinner] = useState(false);
  // const [ loadingError, setLoadingError ] = useState(false);
  const [loadingErrorMessage, setLoadingErrorMessage] = useState('');
  const [userSubmit, setUserSubmit] = useState(false);
  const history = useHistory();

  const onChange = (e) => {
    setSubreaddit(e.target.value);
  };

  const fetchData = async (sbrdt) => {
    setShowSpinner(true);
    try {
      const date = new Date(Date.now());
      const lastYear = date.getFullYear() - 1;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const data = await useFetchPosts(`${API_URL}/${sbrdt}/top.json?t=${lastYear}&limit=100`);

      setShowSpinner(false);
      console.log(data);
    } catch (e) {
      setShowSpinner(false);
      setLoadingErrorMessage(e.message);
    }
  };

  useEffect(() => {
    setSubreaddit(defaultSubreddit);
    if (!userSubmit) {
      fetchData(defaultSubreddit);
    } else {
      setUserSubmit(false);
    }
    // history.push(`/search/${subreddit}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultSubreddit]);

  const onClick = (e) => {
    e.preventDefault();

    history.push(`/search/${subreddit}`);
    setUserSubmit(true);
    fetchData(subreddit);
  };

  return (
    <>
      <S.Form>
        <S.Label htmlFor="subreddit">
          r /
        </S.Label>
        <S.Input
          type="text"
          id="subreddit"
          value={subreddit}
          onChange={onChange}
          placeholder="Enter your subreddit"
        />
        <Button onClick={onClick}>search</Button>
      </S.Form>
      {
        showSpinner ? <Spinner show={showSpinner} /> : ''
      }
      {
        loadingErrorMessage.length
          ? <Spinner />
          : ''
      }
    </>
  );
}

export default SubredditForm;
