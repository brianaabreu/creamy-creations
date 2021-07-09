import React, {useState, useEffect}  from "react";
import { Header } from "../header/header";
import { Button, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { Order } from "../../actions/order";
import { useDispatch } from 'react-redux';
import Footer from '../footer/footer';



export const OrderPost = () => {

    const [postOrder, setPostOrder] = useState({name: String,  flavors: String, toppings: String});
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(Order(postOrder));

    }

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div>
            <Header />

            <div className="orderContainer" >
                <FormGroup autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <h1 className="ConeTitle" for="exampleSelect">Select Cone!</h1>
                    <Input
                        type="select"
                        name="Select Cone!"
                        id="exampleSelect"
                        value={postOrder.name}
                        onChange={(e) => 
                            setPostOrder({
                                ...postOrder, Name:e.target.value
                            })}>
                            <option>Select</option>
                            <option>Waffle  $1.00</option>
                            <option>Sugar  $1.00</option>
                            <option>Chocolate Dipped Cone  $2.00</option>
                            <option>Bowl  $0.00</option>
                        </Input>
                </FormGroup>
                <FormGroup>
                    <h1 className="IcecreamTitle" for="exampleSelect">Select Flavor!</h1>
                    <Input
                        type="select"
                        name="Select Flavor!"
                        id="exampleSelect"
                        value={postOrder.flavors}
                        onChange={(e) => 
                            setPostOrder({
                                ...postOrder, flavors:e.target.value
                            })}>
                            <option>Select</option>
                            <option>Chocolate  $2.00</option>
                            <option>Vanilla  $2.00</option>
                            <option>Strawberry  $2.00</option>
                            <option>Coffee  $2.50</option>
                            <option>Pistachio  $2.50</option>
                            <option>Cookie Dough  $2.50</option>
                        </Input>
                </FormGroup>
                <FormGroup>
                    
                    <FormGroup>
                        <h1 for="exampleCheckbox">Select Toppings!</h1>
                        <div className="checkbox">
                           
                            
                                  <div value={postOrder.toppings}
                            onChange={(e) => 
                                setPostOrder({
                                    ...postOrder, toppings:e.target.value
                                })} >  
                                <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Brownie Bites $0.50" />
                                <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Sliced Strawberries $0.50" />
                                <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Graham Crackers $0.50" />
                            </div>

                            <div>
                                <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Oreos $0.50"  />
                                <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Chocolate Chips $0.50"  />
                                <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Chocolate Syrup $0.50"  />

                                </div>
                        </div>
                    </FormGroup>
                    <Button className="orderSubmitBtn" onClick={refreshPage} type="submit" style={{ border: 'none', fontFamily: 'Oswald, sans-serif', marginTop: '25px', width: '50%', backgroundColor: '#FF9797' }}>Submit</Button>

                </FormGroup>

            </div>
            <Footer />
        </div>
    )
}
export default OrderPost;


