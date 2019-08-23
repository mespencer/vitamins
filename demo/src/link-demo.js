import React from 'react';
import { Link, Box } from 'components';
import CompoentContainer from './component-container';

const LinkDemo = () => (
  <CompoentContainer title="Link">
    <CompoentContainer title="Normal Link" isVariation>
      <Box>
        <Link href="#anchor">This is a link</Link>
      </Box>
      <Box>
        <Link href="#anchor" openInNewTab>This link opens in a new tab</Link>
      </Box>
    </CompoentContainer>
    <CompoentContainer title="Button Links" isVariation>
      <Box>
        <Link href="#anchor" button>Button Link</Link>
      </Box>
      <Box>
        <Link href="#anchor" button buttonType="filled">Button Link</Link>
      </Box>
      <Box>
        <Link href="#anchor" button buttonType="text">Button Link</Link>
      </Box>
    </CompoentContainer>
  </CompoentContainer>
);

export default LinkDemo;
