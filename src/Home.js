
import React from 'react';
import { Left, Right, Body,Button, Icon,Thumbnail, Text, Content, Card, CardItem } from 'native-base';
import { Image } from 'react-native';

export const BlogList = [
    { id: 1, title: 'Implementando Shimmer Effect no React Native', author: 'Claudio Orlandi', author_avatar: 'https://secure.gravatar.com/avatar/4a75e363796021a2bc2b9f805bacc2da?s=500&d=mm&r=g', cover_image_url: 'https://blog.rocketseat.com.br/wp-content/uploads/2018/06/capa_react-native-shimmer-868x488.png', likes: 1290, comments: 129, time: '21 de Junho' },
    { id: 2,title: 'Utilizando mapas no React Native com Mapbox', author: 'Higo Ribeiro', author_avatar: 'https://secure.gravatar.com/avatar/8834a7ccea235ca4cca9c970d95e27f3?s=500&d=mm&r=g', cover_image_url: 'https://blog.rocketseat.com.br/wp-content/uploads/2060/06/react-native-map-mapbox-868x488.png', likes: 1290, comments: 129, time: '20 de Junho' },
  ];

export const Home = ({ BlogList }) => (
    <Content>
     {BlogList.map(blog => (
     <Card key={blog.id}>
       <CardItem>
         <Left>
           <Thumbnail source={{ uri: blog.author_avatar}} />
           <Body>
             <Text>{blog.title}</Text>
             <Text note>{blog.author}</Text>
           </Body>
         </Left>
       </CardItem>
       <CardItem cardBody>
         <Image source={{ uri: blog.cover_image_url}} style={{height: 200, width: null, flex: 1}}/>
       </CardItem>
       <CardItem>
         <Left>
           <Button transparent>
             <Icon active name="thumbs-up" />
             <Text>{blog.likes}</Text>
           </Button>
         </Left>
         <Body>
           <Button transparent>
             <Icon active name="chatbubbles" />
             <Text>{blog.comments}</Text>
           </Button>
         </Body>
         <Right>
           <Text note>{blog.time}</Text>
         </Right>
       </CardItem>
     </Card>))}
   </Content>
  );

  export default Home
  