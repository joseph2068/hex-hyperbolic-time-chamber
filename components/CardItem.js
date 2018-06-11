import React from 'react';
import { Icon, Form, Item, Input } from 'native-base';

export default class InputBox extends React.Component {
  render() {
    return (
          <Form>
            <Item>
              <Icon type="Entypo" name='plus' style={{marginRight: 10,alignItems: 'center',}} />
              <Input placeholder='Add Task'/>
            </Item>
          </Form>
          );
  }
}