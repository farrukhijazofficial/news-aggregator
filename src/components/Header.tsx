import React from 'react';
import { Col, DatePicker, Input, Row, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;

type HeaderProps = {
  onSearch: (value: string) => void;
  onFilterChange: (type: string, value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onFilterChange }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Row justify="center">
        <h2>News Aggregator</h2>
      </Row>
      <Row justify="center" gutter={[16, 16]} style={{ margin: '0px 10px 10px 0px' }}>
        <Col xs={24} sm={12} md={4} lg={4}>
          <Search placeholder="Search Articles" style={{ width: '100%' }} onSearch={onSearch}
                  allowClear/>
        </Col>
        <Col xs={24} sm={12} md={4} lg={4}>
          <Select placeholder="Select Source" onChange={(value) => onFilterChange('source', value)}
                  style={{ width: '100%' }} allowClear>
            <Option value="foxnews.com">Fox News</Option>
            <Option value="cnn.com">CNN</Option>
            <Option value="bbc.co.uk">BBC</Option>
          </Select>
        </Col>
        <Col xs={24} sm={12} md={4} lg={4}>
          <Select placeholder="Select Category" onChange={(value) => onFilterChange('category', value)}
                  style={{ width: '100%' }} allowClear>
            <Option value="technology">Technology</Option>
            <Option value="sports">Sports</Option>
            <Option value="health">Health</Option>
            <Option value="business">Business</Option>
          </Select>
        </Col>
        <Col xs={24} sm={12} md={4} lg={4}>
          <DatePicker style={{ width: '100%' }} placeholder="Select From Date"
                      onChange={(date) => onFilterChange('from', date.format('YYYY-MM-DD'))}/>
        </Col>
        <Col xs={24} sm={12} md={4} lg={4}>
          <DatePicker style={{ width: '100%' }} placeholder="Select To Date"
                      onChange={(date) => onFilterChange('to', date.format('YYYY-MM-DD'))}/>
        </Col>
      </Row>
    </div>
  );
};

export default Header;