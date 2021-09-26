import React from 'react';
import { string, node } from 'prop-types';

import * as C from './Info.style';

const Info = ({ id, headline, children }) => (
  <C.Article>
    <C.Headline id={id}>
      {headline}
    </C.Headline>

    <C.Content>
      {children}
    </C.Content>
  </C.Article>
);

Info.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  children: node.isRequired,
};

export default Info;
