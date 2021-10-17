import React, { useEffect, useState } from 'react';
import { Container, Row , Col, Image , Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuthFoods from '../../../hooks/useAuthFoods';

const FoodDetail = () => {
    // const [foodDetail,setFoodDetail] = useState([]);

    const {foodID} = useParams();
    const allfoods = useAuthFoods();

        const food = allfoods.filter(fd => fd.id === foodID);
        // const food = allfoods.find(fd => fd.id === foodID);

        console.log('single data',food);
        console.log('all data',allfoods);
    // for(const food of allfoods){
    //     console.log(food.id)
        
    // }
/*     

    useEffect(() =>{
        fetch('/foods.json')
        .then(res => res.json())
        .then(data => setFoodDetail(data))
    },[foodID]) 
    console.log(foodDetail)
    const foodhere = foodDetail.find(fds => {
        return fds.id === '1';
    });
    console.log(foodhere) */
    return (
        <div>
            <Container>
                <Row className='my-5 py-5'>
                    <Col xs={12} md={6}>
                        <Image src="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="">
                            <h2>FoodName</h2>
                            <h3>Category: {foodID}</h3>
                            <h3 className="text">Price: </h3>
                            <div className="">
                                <Button  className='fw-bold me-2' variant="danger">Order Now</Button>
                                <Link to='/home'>
                                    <Button  className='fw-bold' variant="danger">Back Home</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDetail;