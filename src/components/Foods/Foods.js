import React from 'react';
import { Container, Nav , Button} from 'react-bootstrap';
import './Foods.css';

const Foods = ({handleFoods}) => {
    
    return (
        <div>
            <Container>
                <Nav className="justify-content-center m-2">

                    <Button onClick={()=>{handleFoods('breakfast')}} variant="" active className="bg-none food-nav text-danger fw-bold">Break-Fast</Button>

                    <Button onClick={()=>{handleFoods('Lunch')}} variant="" className="bg-none food-nav text-danger fw-bold">Lunch</Button>

                    <Button onClick={()=>{handleFoods('Dinner')}} variant="" className="bg-none food-nav text-danger fw-bold">Dinner</Button>


                </Nav>
            </Container>
        </div>
    );
};

export default Foods;