import * as React from 'react'
import Layout from '../../components/Layout'
import HomeBox from '../../components/HomeBox';
import { Form, Button, ListGroup, Jumbotron, Badge } from "react-bootstrap";

interface Props {
  data: Object | undefined
}

const HomePage: React.FunctionComponent<Props> = (data) => (
    <Layout title="Home">
      <HomeBox>
        <Form>
        {console.log('>>>>',data)}
        {console.log('>>>>',data)}
          <Jumbotron>
            <h1>Hello , You're welcome to <span className="uniqueText">OLYMPIA</span></h1>
            <p>
              This is a simple home of Olympia, a safe place where you can open as many emails and
              just be sure to find them again
            </p>
          </Jumbotron>
          <Badge className="BadgeHolder" variant="secondary">This is all that we know about you!</Badge><br />
          <Form.Row>
            <ListGroup className="ListHolder">
              <ListGroup.Item>Name :Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Form.Row><br />
          <Form.Row>
            <Button className="buttonHolder" variant="outline-secondary" href="/">Logout</Button><br />
          </Form.Row>
        </Form> 
      </HomeBox>
    </Layout>
  )

export default HomePage;
