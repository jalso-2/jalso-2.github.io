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
            <Row>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Image src='./images/james.jpg' alt='James Goedert' rounded />              
                <p>
                  Lipsum Stuffs
                </p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Image src='./images/jeralnisha.jpg' alt='Jeralnisha Franklin' rounded />                              
                <p>
                  Lipsum Stuffs
                </p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <Image src='./images/zachary.jpg' alt='Zachary Bergmann' rounded />              
                <p>
                  Lipsum Stuffs
                </p>
              </Col>
            </Row>
          </Well>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
