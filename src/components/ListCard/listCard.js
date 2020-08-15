import React from 'react'
import Cards from '../Card/card.js';
import { Col, Row } from 'antd';

function listCard(props) {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Cards/>
      </Col>
      <Col span={8}>
        <Cards/>
      </Col>
      <Col span={8}>
        <Cards/>
      </Col>
      <Col span={8}>
        <Cards/>
      </Col>
      <Col span={8}>
        <Cards/>
      </Col>
    </Row>
  )
}

export default listCard

