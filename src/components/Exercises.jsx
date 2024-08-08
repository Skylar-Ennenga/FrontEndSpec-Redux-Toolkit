import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import NavBar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import { addItem } from '../features/exerciseListSlice';


const Exercises = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const { exerciseList } = useSelector((state) => state.exerciseList);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        dispatch(addItem(value))
      };


  
  
      const handleClose = () => setShowModal(false);
  
      
      const handleClick = (exercise) => {
        setSelectedValue(exercise);
        setShowModal(true)
      };
      
      const handleDelete = () => {}
  
  
  
  
  
  
  
  return (
    <>
    <NavBar/>
    <Form.Select aria-label="Default select example" onChange={handleSelectChange}>
      <option>Select which exercise youd like to add.</option>
      <option value="Run">Run</option>
      <option value="Walk">Walk</option>
      <option value="Weights">Weights</option>
      <option value="Swimming">Swimming</option>
      <option value="Yoga">Yoga</option>
      </Form.Select>
      <ListGroup>
        <h3>Click on the exercise for if youd like to delete. </h3>
        {exerciseList.map((exercise, index) => (
      <ListGroup.Item key={index} onClick={() => handleClick(exercise)}>{exercise}</ListGroup.Item>
    ))}
    </ListGroup>
    <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Would you like to delete this exercise?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Choose from the Options Below.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
    
    </>
  )
}

export default Exercises
