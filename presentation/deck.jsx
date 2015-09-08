import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  dashboard: require("./images/poop_monitor_dashboard.png"),
  dashboardComponents: require("./images/poop_monitor_dashboard_components.png"),
  diaper: require("./images/poop_monitor_diaper.png"),
  diaperComponents: require("./images/poop_monitor_diaper_components.png"),
  lego: require("./images/lego.png")
};

preloader([
            images.dashboard, 
            images.dashboardComponents, 
            images.diaper, 
            images.diaperComponents
          ]);

const justifyCenter = {
  "-webkit-align-items": "center",
  "-webkit-box-align": "center",
  "align-items": "center"
};

const subListItem = {
  "font-size": "80%",
  "margin-left": "1em"
};

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={800}>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            React
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            A Presentation for OttawaJS
          </Heading>
        </Slide>


        <Slide transition={["slide"]} bgColor="black" notes="you've probably heard about it by now">
          <Heading size={2} textColor="tertiary">
            Hello
          </Heading>
          <Link href="https://twitter.com/brucelefebvre">
            <Text textColor="tertiary">@brucelefebvre</Text>
          </Link>
        </Slide>


        <Slide transition={["slide"]}>
            <Heading size={2} caps textColor="black">
              React: 
            </Heading>
            <Heading size={4} caps fit textColor="black">
              <Appear>a JavaScript library for creating user interfaces</Appear>
            </Heading>
        </Slide>


        <Slide transition={["slide"]}  bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
            Why React?
          </Heading>
          <List>
            <ListItem><Appear>Component based</Appear></ListItem>
            <ListItem>
              <Appear>Fast</Appear>
              <List>
                <ListItem style={subListItem}><Appear>Performance</Appear></ListItem>
                <ListItem style={subListItem}><Appear>To learn</Appear></ListItem>
              </List>
            </ListItem>
            <ListItem><Appear>Simple</Appear></ListItem>
            <ListItem><Appear>No templates</Appear>
              <List >
                <ListItem style={subListItem}><Appear>Means no abstractions</Appear></ListItem>
                <ListItem style={subListItem}><Appear>Markup lives with its corresponding view logic</Appear></ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary" notes="for me to learn, i need to build something">
          <Heading size={2} textColor="tertiary">
            Demo!
          </Heading>
        </Slide>


        <Slide transition={["slide"]}  bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">
            On the Shoulders of Giants
          </Heading>
          <List>
            <ListItem>React - http://facebook.github.io/react/</ListItem>
            <ListItem><Appear>React Router - https://rackt.github.io/react-router/</Appear></ListItem>
            <ListItem><Appear>React Intl - http://formatjs.io/react/</Appear></ListItem>
            <ListItem><Appear>Ionic Framework CSS - http://ionicframework.com/</Appear></ListItem>
            <ListItem><Appear>Firebase - https://www.firebase.com/</Appear></ListItem>
            <ListItem><Appear>PhoneGap - http://phonegap.com/</Appear></ListItem>
          </List>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} textColor="tertiary">
            Dashboard Components
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.dashboard.replace('/','')} />
            </Fill>
            <Fill>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["none"]} bgColor="primary">
          <Heading size={5} textColor="tertiary">
            Dashboard Components
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.dashboardComponents.replace('/','')} />
            </Fill>
            <Fill>
              <List>
                <ListItem textColor="red">Dashboard</ListItem>
                <ListItem textColor="green"><Appear fid="2">Header</Appear></ListItem>
                <ListItem textColor="blue"><Appear fid="3">EventSelector</Appear></ListItem>
                <ListItem textColor="yellow"><Appear fid="4">EventTypeLink</Appear></ListItem>
                <ListItem textColor="pink"><Appear fid="5">EventHistory</Appear></ListItem>
                <ListItem textColor="orange"><Appear fid="6">Event</Appear></ListItem>
                <ListItem textColor="brown"><Appear fid="6">DiaperEvent</Appear></ListItem>
                <ListItem textColor="gray"><Appear fid="6">FormattedRelative</Appear></ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.diaper.replace('/','')} />
            </Fill>
            <Fill>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["none"]} bgColor="primary" notes="what makes a good component">
          <Layout>
            <Fill>
              <Image src={images.diaperComponents.replace('/','')} />
            </Fill>
            <Fill>
              <List>
                <ListItem textColor="red">AddDiaperEvent</ListItem>
                <ListItem textColor="green"><Appear fid="1">Header</Appear></ListItem>
                <ListItem textColor="blue"><Appear fid="2">DiaperEventForm</Appear></ListItem>
                <ListItem textColor="orange"><Appear fid="3">TimeSelector</Appear></ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide> 


        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>...with React the only thing you do is build components.</Quote>
            <Cite><a href="https://facebook.github.io/react/docs/why-react.html">Why React?</a></Cite>
          </BlockQuote>
        </Slide>

{/*
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>...a component should ideally only do one thing.</Quote>
            <Cite>Pete Hunt, <a href="https://facebook.github.io/react/docs/thinking-in-react.html">Thinking in React</a></Cite>
          </BlockQuote>
        </Slide>
*/}

        <Slide transition={['slide']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={3} textColor="tertiary">
            Your First Component
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./firstComponent.example")}
            margin="20px auto"/>
        </Slide>


        <Slide transition={['slide']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={3} textColor="tertiary">
            Use It
          </Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./componentUse.example")}
            margin="20px auto"/>
        </Slide>


        <Slide transition={["slide"]}>
          <Heading size={3} textColor="tertiary">
            Component Basics
          </Heading>
          <Layout>
            <Fill style={{flex: 1}}>
              <Image src={images.lego.replace('/','')} width="100%"/>
            </Fill>
            <Fill style={{flex: 2}}>
              <List>
                <ListItem>Component output is simply a function of `state` and `props`</ListItem>

                <ListItem><Appear>Lower-case tag name renders HTML</Appear></ListItem>
                <ListItem><Appear>Upper-case renders React component</Appear></ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="tertiary">
            Speed: at a price
          </Heading>
          {/* code sample of handleSubmit */}
        </Slide>


        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="tertiary">
            Gotchas
          </Heading>
          {/*  */}
        </Slide>
        {/*
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Full Width
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit textColor="tertiary">
              Adjustable Darkness
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit textColor="primary">
              Background Imagery
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
            <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid="5">PDF export</Appear></ListItem>
            <ListItem><Appear fid="6">And...</Appear></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      */}
      </Deck>
    );
  }
}
