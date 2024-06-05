import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Modal from 'react-modal';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
`;

const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 10px 0;
`;

const CardPlace = styled.p`
  font-size: 1em;
  color: #666;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

const BirdCarts = () => {
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBird, setSelectedBird] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get(`https://freetestapi.com/api/v1/birds?search=${query}`);
        setBirds(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBirds();
  }, [query]);

  const openModal = (bird) => {
    setSelectedBird(bird);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBird(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  Modal.setAppElement('#root');

  return (
    <Container>
      <SearchBar
        type="text"
        placeholder="Search for birds..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <CartContainer>
        {birds.map((bird) => (
          <Card key={bird.id} onClick={() => openModal(bird)}>
            <CardImage src={bird.image} alt={bird.name} />
            <CardTitle>{bird.name}</CardTitle>
            <CardPlace>{bird.place_of_found}</CardPlace>
          </Card>
        ))}
      </CartContainer>
      
      {selectedBird && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Bird Details"
        >
          <h2>{selectedBird.name}</h2>
          <p><strong>Species:</strong> {selectedBird.species}</p>
          <p><strong>Family:</strong> {selectedBird.family}</p>
          <p><strong>Habitat:</strong> {selectedBird.habitat}</p>
          <p><strong>Diet:</strong> {selectedBird.diet}</p>
          <p><strong>Description:</strong> {selectedBird.description}</p>
          <p><strong>Weight:</strong> {selectedBird.weight_kg} kg</p>
          <p><strong>Height:</strong> {selectedBird.height_cm} cm</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </Container>
  );
};

export default BirdCarts;






