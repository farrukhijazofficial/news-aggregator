import React, { useState } from 'react';
import { Col, DatePicker, Input, Row, Select } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { toast } from 'react-toastify';

const { Search } = Input;
const { Option } = Select;

type HeaderProps = {
  onSearch: (value: string) => void;
  onFilterChange: (type: string, value: string | null) => void;
  filters: { [key: string]: string };
}

const Header: React.FC<HeaderProps> = ({ onSearch, onFilterChange, filters }) => {

  const [dateRange, setDateRange] = useState({
    to: null,
    from: null,
  });

  const dateChangeHandler = (type: string, date: Dayjs | null) => {
    const allowedKeys = ['from', 'to'];
    const otherKeys = Object.keys(filters).filter(key => !allowedKeys.includes(key));

    if (otherKeys.length === 0) {
      toast.error('Please select another "Filter" before applying date range.');
      return;
    }

    // Proceed only if other filters are selected
    if (date) {
      onFilterChange(type, date.format('YYYY-MM-DD'));
    } else {
      onFilterChange(type, null);
    }
    setDateRange(prevState => ({ ...prevState, [type]: date }));
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <Row justify="center">
        <h2 style={{ cursor: 'pointer' }}>News Aggregator</h2>
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
          <DatePicker style={{ width: '100%' }} placeholder="Select From Date" maxDate={dayjs()}
                      value={dateRange.from}
                      onChange={(date) => dateChangeHandler('from', date)}
          />
        </Col>
        <Col xs={24} sm={12} md={4} lg={4}>
          <DatePicker style={{ width: '100%' }} placeholder="Select To Date" maxDate={dayjs()}
                      value={dateRange.to}
                      onChange={(date) => dateChangeHandler('to', date)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Header;