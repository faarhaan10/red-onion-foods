import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useAuthFoods from '../../hooks/useAuthFoods';
import useFoods from '../../hooks/useFoods';
import Food from '../Foods/Food/Food';
import Foods from '../Foods/Foods';

const Home = () => {
    const [food,setFood] = useState([]);
    const foods = useAuthFoods();


    const handleFoods = (type) => {
        const selectedFood = foods.filter(fd => fd.type===type);
        setFood(selectedFood);
    }
    
    const bg ={
        background:'url(https://i.ibb.co/VLmg4RZ/bannerbackground.png)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
        
    }
    return (
        <>
        <div className="d-flex justify-content-center align-items-center bg-info p-5" style={bg}>
            <div className="my-5 py-5">
                <h1 className="mt-5">Best food waiting for your belly</h1>
                <div className="input-group rounded-pill w-75  ps-3 mx-auto mb-5 text-center border bg-white">
                    <input className='form-control border-0' type="text" placeholder="search fooods"/>
                    <Button variant="danger" className='rounded-pill px-4'  id="button-addon2">Search</Button>
                </div>
            </div>
        </div>
            <Foods handleFoods={handleFoods}></Foods>
            <Container>
                <Row>
                    {
                        food.map(fd => <Food
                            id={fd.id}
                            food={fd}
                        ></Food>)

                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;