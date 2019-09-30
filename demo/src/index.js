import React from 'react';
import { render } from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import IndexLink from './index-link';
import ButtonDemo from './button-demo';
import LinkDemo from './link-demo';
import TextInputDemo from './text-input-demo';
import DateInputDemo from './date-input-demo';
import ImageDemo from './image-demo';

const Demo = () => (
  <Container fluid>
    <Row>
      <Col><h1>Demo of Vitamins</h1></Col>
    </Row>
    <Row>
      <Col md={3}>
        <h2>Index</h2>
        <IndexLink title="Button" />
        <IndexLink title="Link" />
        <IndexLink title="Text Input" />
        <IndexLink title="Date Input" />
        <IndexLink title="Image" />
      </Col>
      <Col>
        <ButtonDemo />
        <LinkDemo />
        <TextInputDemo />
        <DateInputDemo />
        <ImageDemo />
      </Col>
    </Row>
  </Container>
);

render(<Demo />, document.querySelector('#demo'));
