import * as React from 'react'
import Layout from '../../components/Layout'
import HomeBox from '../../components/HomeBox';
import { Form, Button, ListGroup, Jumbotron, Badge } from "react-bootstrap";

interface Props {
  firstname: string,
  surname: string,
  email: string,
  gender: string,
  handleClick: any
}

const HomePage: React.FunctionComponent<Props> = ({firstname,surname,email,gender,handleClick}) => {
   return( <Layout title="Home">
      <HomeBox>
        <Form>
          <Jumbotron>
            <h1>Hello <span style={{color:'#ff00ff'}}>{firstname}</span> ,Youre welcome to<span className="uniqueText">OLYMPIA</span></h1>
            <p>
              This is a simple home of Olympia, a safe place where you can open as many emails and
              just be sure to find them again
            </p>
          </Jumbotron>
          <Badge className="BadgeHolder" variant="secondary">This is all that we know about you!</Badge><br />
          <Form.Row>
            <ListGroup className="ListHolder">
              <ListGroup.Item>First Name : {firstname}</ListGroup.Item>
              <ListGroup.Item>Surname : {surname}</ListGroup.Item>
              <ListGroup.Item>Gender : {gender}</ListGroup.Item>
              <ListGroup.Item>Email : {email}</ListGroup.Item>
            </ListGroup>
          </Form.Row><br />
          <Form.Row>
            <Button className="buttonHolder" variant="outline-secondary" type='submit' onClick={handleClick}>Logout</Button><br />
          </Form.Row>
        </Form> 
      </HomeBox>
    </Layout>)
}

export default HomePage;
