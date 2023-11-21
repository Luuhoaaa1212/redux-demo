import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import fillterSlice from './fillterSlice';

const { Search } = Input;

export default function Filters() {
  const [searchText ,setSearchText] = useState('');
  const [fillterStatus ,setFillterStatus] = useState('All');
  const [fillterPriority,setFillterPriority] = useState([]);
  
  const dispatch = useDispatch()
  function handleSeachTexChange(e){
    setSearchText(e.target.value);
    dispatch(fillterSlice.actions.searchFillterChange(e.target.value));
  }
  function handleStatusChange(e){
    setFillterStatus(e.target.value);
    dispatch(fillterSlice.actions.statusFillterChange(e.target.value))
  }
  function handlePriorityChange(value){
    setFillterPriority(value);
    dispatch(fillterSlice.actions.priorityFillterChange(value));
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleSeachTexChange} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={fillterStatus} onChange={handleStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={fillterPriority}
          onChange={handlePriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
