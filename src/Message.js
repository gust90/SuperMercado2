import React, { Fragment } from 'react';
import { Left, Right, Body, Icon, Fab, List, ListItem, Thumbnail, Text} from 'native-base';
import Form from './page/Form';


export const Msg = [
    { id: 1, name: 'Diego Fernandes', avatar_url: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4', last_message: 'Lorem ipsum', time: '18:20 PM' },
    { id: 2,name: 'Claudio Orlandi', avatar_url: 'https://secure.gravatar.com/avatar/4a75e363796021a2bc2b9f805bacc2da?s=500&d=mm&r=g', last_message: 'Lorem ipsum', time: '10:12 AM' },
  ];

export const Messages = ({ Msg }) => (
    <Fragment>
      <List>
        {Msg.map( message => (
          <ListItem avatar key={message.id}>
            <Left>
              <Thumbnail source={{ uri: message.avatar_url}} />
            </Left>
            <Body>
              <Text>{message.name}</Text>
              <Text note>{message.last_message}</Text>
            </Body>
            <Right>
              <Text note>{message.time}</Text>
            </Right>
          </ListItem>
        ))}
      </List>
      <Fab 
        direction="up"
        position="bottomRight"
        style={{ backgroundColor: "#0000"}}
      >
        <Form />
        <Icon type="FontAwesome" name="plus" />
      </Fab>
    </Fragment>
  );

  export default Messages