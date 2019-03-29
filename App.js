
import React from 'react';
import { Container, Header, Left,  Body, Title, Icon, View, Thumbnail, Tab, Tabs, TabHeading} from 'native-base';
import { StyleSheet } from 'react-native';
import { Home, BlogList } from './src/Home';
import { Messages, Msg } from './src/Message';

const Notification = () => null;

const logo_url = 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4';

export const App = () => (
  <Container>
    <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
      <Left>
        <Thumbnail small source={{ uri: logo_url }} />
      </Left>
      <Body>
        <Title>Rocketseat</Title>
      </Body>
    </Header>
    <View style={styles.container}>
    <Tabs>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
        <Home BlogList={BlogList}/>
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
        <Notification />
      </Tab>
      <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="envelope-o" /></TabHeading>}>
        <Messages Msg={Msg}/>
      </Tab>
    </Tabs>
    </View>
  </Container>
);

export default App;

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#000000",
  },
  header: { 
    backgroundColor: "#7159C1",
  },
  container: {
    flex: 1,
  }
});