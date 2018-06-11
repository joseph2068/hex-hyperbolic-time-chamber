import React from 'react';
import { Icon, Form, Item, Input, Button } from 'native-base';

export default class InputBox extends React.Component {
  render() {
    return (
      <Form>
        <Item>
          <Input placeholder='新增記事項目' />
          <Button transparent>
            <Icon type="Entypo" name='paper-plane' style={{ marginRight: 30,alignItems: 'center', }} />
          </Button>
        </Item>
      </Form>
    );
  }
}