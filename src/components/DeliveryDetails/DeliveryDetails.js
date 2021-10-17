import React from 'react';
import { Container, Row ,Col, Form, Image} from 'react-bootstrap';

const DeliveryDetails = () => {
    return (
        <div>
            <Container className="my-5">
                <Row  className="my-5 align-items-center justify-content-between">
                    <Col xs={12} md={5}>
                        <h2>Edit Delivery Details</h2>
                        <hr />
                        <div className="">
                            <Form.Control size="lg"  type="text" defaultValue="Door to door" className="mb-3 bg-light" />

                            <Form.Control size="lg"  type="text" placeholder="Address" required className="mb-3 bg-light" />
                            <Form.Control size="lg"  type="text" placeholder="Address 2" className="mb-3 bg-light" />
                            <Form.Control size="lg"  type="text" placeholder="Business Name" required className="mb-3 bg-light" />
                            <Form.Control size="lg"  type="text" placeholder="Add delivery instructor" className="mb-3 bg-light" />


                            <Form.Control size="lg"  type="submit" value="Save & Continue"className="bg-danger text-white fw-bold" />
                        </div>
                    </Col>
                    <Col xs={12} md={5} className="">
                        <div className="mx-3" >
                            <div className="">
                                <p className="m-0 p-0">From: <strong>Gulsan Plaza Resturant GPR</strong></p>
                                <p className="m-0 p-0">Arriving in 20-30 minute</p>
                                <p className="m-0 p-0">107 Road no. 8</p>
                            </div>
                            <div className="overflow-auto" style={{height:'365px'}}>
                                
                                     
                                <div className="bg-light d-flex align-items-center justify-content-around   p-2 rounded-3 mb-3">
                                    <div className="">
                                        <Image fluid 
                                        width="130"
                                        src="https://i.ibb.co/mv6B6q9/breakfast1.png" />
                                    </div>
                                    <div className="">
                                        <h4>Butter Nan</h4>
                                        <h4 className="text-danger">$40</h4>
                                        <p>Delivery Free</p>
                                    </div>
                                    <div className="d-flex align-items-center fs-5">
                                        <div className="ms-2"><i class="fas fa-minus"></i></div>
                                        <div className="bg-white ms-2 py-2 px-4 rounded-3">2</div>
                                        <div className="ms-2"><i class="fas fa-plus"></i></div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="">
                                <div className="d-flex justify-content-between px-2">
                                    <h4>Sub-Total-4 items</h4>
                                    <h4 className="text-danger">$40</h4>
                                </div>
                                <div className="d-flex justify-content-between px-2">
                                    <h4>Tax</h4>
                                    <h4 className="text-danger">$5</h4>
                                </div>
                                <div className="d-flex justify-content-between px-2">
                                    <h4>Delivery fee</h4>
                                    <h4 className="text-danger">$2</h4>
                                </div>
                                <div className="d-flex justify-content-between px-2">
                                    <h4>Total</h4>
                                    <h4 className="text-danger">$320</h4>
                                </div>
                            </div>
                            <Form.Control size="lg"  type="button" value="Place Order" disabled className="bg-secondary  text-white fw-bold" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DeliveryDetails;