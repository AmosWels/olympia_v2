import * as React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import HomeBox from '../../components/HomeBox';
import { Form, Button, ListGroup } from "react-bootstrap";

const HomePage: React.FunctionComponent = () => (
  <Layout title="Home">
    <HomeBox>
      <Form>
        <Form.Row>
            <h1>Home</h1><br/>
            <p>
            This is the Home page
          </p>
        </Form.Row>
        <Form.Row>
          <p>
            <Link href="/">
              <a>Welcome Visitor</a>
            </Link>
          </p>
          </Form.Row>
          <Form.Row>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Form.Row><br/>
        <Form.Row>
          <Button variant="outline-secondary" href="/">Logout</Button><br />
        </Form.Row>
      </Form>
    </HomeBox>
  </Layout>
)

export default HomePage