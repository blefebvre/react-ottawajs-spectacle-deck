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
  lego: require("./images/lego.png"),
  poop_monitor_inspiration: require("./images/poop_monitor_inspiration.png"),
  happy_baby: require("./images/happy_baby.png")
};

preloader([
            images.dashboard, 
            images.dashboardComponents, 
            images.diaper, 
            images.diaperComponents,
            images.poop_monitor_inspiration,
            images.happy_baby
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
            <Heading size={4} caps fit textColor="black" style={{"margin-top": "-1.8em"}}>
              <Appear>a JavaScript library for creating user interfaces</Appear>
            </Heading>
        </Slide>


        <Slide transition={["slide"]}  bgColor="secondary" textColor="primary" notes="encourages creation of modular, composable UIs">
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
          <Image src={images.poop_monitor_inspiration.replace('/','')} />
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
            <Quote>...with React, the only thing you do is build components.</Quote>
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
            source={require("raw!./componentUse1.example")}
            margin="0px auto"/>
          <Appear>
            <CodePane
              lang="javascript"
              source={require("raw!./componentUse2.example")}
              margin="0px auto"/>
          </Appear>
        </Slide>


        <Slide transition={["slide"]} notes="vs. imperative: focused on describing _how_ a program operates">
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
                <ListItem><Appear>Data flows from "Owner to Owned"</Appear>
                  <List>
                    <ListItem style={subListItem}><Appear>&lt;Parent&gt;&lt;Child /&gt;&lt;/Parent&gt;</Appear></ListItem>
                  </List>
                </ListItem>
                <ListItem><Appear>Declarative</Appear>
                  <List>
                    <ListItem style={subListItem}><Appear>Focus is on _what_ the program should accomplish without prescribing how to do it</Appear></ListItem>
                  </List>
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>


        <Slide transition={['slide']} bgColor="primary" notes="Stateful component">
          <Heading size={6} style={{"margin-top": "-1.2em"}}>A Stateful Component</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./advancedComponent.example")}
            margin="20px auto"/>
        </Slide>


        <Slide transition={['slide']} bgColor="primary" notes="lets break it down">
          <Heading size={6} style={{"margin-top": "-1.2em"}}>Let's Break it Down</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./compBreakdown.example")}
            margin="20px auto"/>
            <Appear><Text>More on component lifecycle methods can be <a href="https://facebook.github.io/react/docs/component-specs.html">found here</a></Text></Appear>
        </Slide>


        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>...code is read far more than it's written, and it's extremely easy to read this modular, explicit code.</Quote>
            <Cite>Pete Hunt, <a href="https://facebook.github.io/react/docs/thinking-in-react.html">Thinking in React</a></Cite>
          </BlockQuote>
        </Slide>


        <Slide transition={["slide"]} bgColor="">
          <Heading size={6} style={{"margin-top": "-1.2em"}}>
            Speed: at a price
          </Heading>
          <List>
            <ListItem>No two-way data binding; `props` flow from parent to child </ListItem>
            <ListItem><Appear>Form element data often needs to propogate up</Appear></ListItem>
            <Appear>
              <CodePane
              lang="javascript"
              source={require("raw!./propogateForm1.example")}
              margin="20px auto"/>
            </Appear>
            <Appear>
              <CodePane style={{"margin-top": "-1em"}}
              lang="javascript"
              source={require("raw!./propogateForm2.example")}
              margin="20px auto"/>
            </Appear>
          </List>
        </Slide>


        <Slide transition={["slide"]} bgColor="black" textColor="primary">
          <Heading size={3} textColor="primary">
            Gotchas
          </Heading>
          <List>
            <ListItem>Use an NPM/Gulp/Browserify workflow from the start
              <List>
                <ListItem style={subListItem}><Appear>Like this <Link href="https://github.com/christianalfoni/react-app-boilerplate">react-app-boilerplate</Link></Appear></ListItem>
              </List>
            </ListItem>
            <ListItem><Appear>Beware copying source from non-React samples</Appear>
              <List>
                <ListItem style={subListItem}><Appear>`class` becomes `className`</Appear></ListItem>
                <ListItem style={subListItem}><Appear>`for` becomes `htmlFor`</Appear></ListItem>
              </List>
            </ListItem>
            <ListItem><Appear>React is not a monolithic framework like Angular</Appear>
              <List>
                <ListItem style={subListItem}><Appear>It will not make XHRs for you</Appear></ListItem>
                <ListItem style={subListItem}><Appear>It does not handle routing between views</Appear></ListItem>
                <ListItem style={subListItem}><Appear>You will have to code your own page transitions</Appear></ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>


        <Slide transition={["slide"]} bgColor="primary" notes="thanks for your attention!">
          <Heading size={3} textColor="tertiary"  style={{"margin-top": "-.5em"}}>
            Thanks!
          </Heading>
          <Image src={images.happy_baby.replace('/','')} />
          <Text>Project source on Github: <Link href="http://bit.ly/ott-react">bit.ly/ott-react</Link></Text>
        </Slide>
        

      </Deck>
    );
  }
}
