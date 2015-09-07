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
  diaperComponents: require("./images/poop_monitor_diaper_components.png")
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

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps textColor="black">
            React
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            A Presentation for OttawaJS
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="black" notes="">
          <Heading size={2} textColor="tertiary">
            Hello
          </Heading>
          <Link href="https://twitter.com/brucelefebvre">
            <Text textColor="tertiary">@brucelefebvre</Text>
          </Link>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="">
          <Heading size={2} textColor="tertiary">
            Demo!
          </Heading>
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
            <Quote>..a component should ideally only do one thing.</Quote>
            <Cite>Pete Hunt, <a href="https://facebook.github.io/react/docs/thinking-in-react.html">Thinking in React</a></Cite>
          </BlockQuote>
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
