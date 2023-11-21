import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useSelector, useDispatch} from 'react-redux'
import { addTodo } from '../../redux/actions';
import { v4 as uuidV4 } from 'uuid';
import { useRef, useState } from 'react';
import { todoRemainingSelector} from '../../redux/selectors';
import todoSlice from './todoSlice';



export default function TodoList() {
  const [todoName , setTodoName] = useState('');
  const [priority , setPriority] = useState('Medium');
  const inputName = useRef()

  //useSelector: là function được dùng để lấy ra các phần dữ liệu từ kho chung(store)
  const todoList = useSelector(todoRemainingSelector);
  console.log(todoList);
  

  const dispatch = useDispatch();

  function handleAddButtonClick(){
    dispatch(todoSlice.actions.addTodo({
      id:uuidV4(),
      name :todoName,
      prioriry:priority,
      completed:false,
    }))

    setTodoName('');
    setPriority('Medium');
    inputName.current.focus();

  }
  function handleInpuChange(e){
    setTodoName(e.target.value);
  }
  function handlePriorityChange(value){
    setPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map(todo => <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.prioriry} 
            completed={todo.completed} 
         /> 
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input ref={inputName} value={todoName} onChange={handleInpuChange}  />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
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
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
