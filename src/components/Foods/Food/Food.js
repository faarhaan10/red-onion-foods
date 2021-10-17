import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Food = ({food}) => {
    const {id,foodName,price,img} = food;
    const history = useHistory();

    const handleFood = () => {
        history.push(`/food/${id}`);
    }
    return (
        <Col xs={12} md={4} className="my-2 ">
            <div className="text-center food-card rounded-3 p-2 h-100 d-flex flex-column justify-content-end">
                <Image fluid className="px-4" src={img} />
                <div className="">
                    <h4 className="m-0">{foodName}</h4>
                    <p className="m-0">how we dream about our future</p>
                    <h4 className="m-0">${price}</h4>
                </div>
                <Card.Footer className='border-0 bg-transparent' >
                <Button onClick={handleFood} className='fw-bold w-100' variant="danger">Order</Button>
                </Card.Footer>
            </div>
            
        </Col>
    );
};

export default Food;