import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

function StaticHeader(props) {
  const { title, onBackButtonClick } = props;
  return (
    <Card className="my-2">
      <Card.Title className="text-center">
        <Row className="p-1">
          <Col
            xs={{ span: 2 }}
            style={{ fontSize: "2em", marginBottom: "-1em" }}
            onClick={onBackButtonClick ? () => onBackButtonClick() : () => {}}
          >
            {onBackButtonClick && (
              <Button variant="outline-dark" size="lg">
                <i className="fas fa-chevron-left align-center"></i>
              </Button>
            )}
          </Col>
          <Col xs={{ span: 8 }}>Felicity</Col>
          <Col xs={{ span: 2 }} style={{ fontSize: "2em" }}></Col>
        </Row>
        <Row>
          <Col sm={{ span: 2 }}></Col>
          <Col sm={{ span: 8 }}>{title}</Col>
          <Col sm={{ span: 2 }}></Col>
        </Row>
      </Card.Title>
    </Card>
  );
}

export default StaticHeader;
