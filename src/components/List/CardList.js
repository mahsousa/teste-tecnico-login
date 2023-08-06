import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './card';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardList = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container fluid className="content-form vh-70 d-flex justify-content-center p-5">
      <Container className="border rounded-4 p-3 position-relative h-100">
        <Row>
          {currentItems.map((item) => (
            <Col key={item.id} md="4" className="mb-4">
              {/* Renderizar o componente Card */}
              <Card item={item} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            {/* Renderizar o componente Navigation */}
            <Navigation
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CardList;
