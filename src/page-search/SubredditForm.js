import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import * as S from './SubredditForm.style';
import Button from '../common/button';

function SubredditForm() {
  // const defaultSubreddit = window.location.pathname.split('/')[2];
  const { subreddit: defaultSubreddit } = useParams();
  const [subreddit, setSubreaddit] = useState(defaultSubreddit);
  const history = useHistory();

  // useEffect(() => {
  //   setSubreaddit(defaultSubreddit);
  // }, [defaultSubreddit]);

  useEffect(() => history.listen((location) => {
    setSubreaddit(location.pathname.split('/')[2]);
  }), [history]);

  const onChange = (e) => {
    setSubreaddit(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();

    history.push(`/search/${subreddit}`);
    // console.log(history.location.pathname);
    // window.history.replaceState(null, 'Yeeeee!', `/search/${subreddit}`);
  };

  return (

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
  );
}

export default SubredditForm;
