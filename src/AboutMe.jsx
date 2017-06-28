import React from 'react';
import { Col, Image, Row, Well } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <div>
      <Row>     
        <Col className="container">
          <Image src='http://www.mumbaitheatreguide.com/dramas/articles/images/gujarati-jalso.jpg' alt='Jalso-2' rounded />
        </Col>
        <br />
        <Col className="container">
          <br />
          <Well> 
            <h2> About Us </h2>
            <p>
              Lipsum Stuffs
            </p>
          </Well>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
