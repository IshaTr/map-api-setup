import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:relative; 
    margin-bottom:45px; 
    margin: 45px 24px;
`;

const Input = styled.input`
    transition: 0.3s all ease-in-out;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 80%;
    border-radius: 4px;
    border: ${props => props.isValid ? '1px solid #d8d8d8' : '1px solid red'};

    &:focus {
        outline:none;
        border: 1px solid black;
    }
`;

const Img = styled.img`
    height: 50%;
    width: 100%;
`;

const Form = styled.form`
    width: 50%;

    @media (max-width: 480px) {
        width: 78%;
    }
 `;

 const Error = styled.span`
    color: red;
    font-size: 16px;
 `;

const SideNav = ({
    lat,
    lng,
    setLat,
    setLng,
    isDefaultLatTrue,
    isDefaultLngTrue,
    isLatValid,
    isLngValid,
}) => (
    <Form> 
        <Img src='https://cdn.dribbble.com/users/22683/screenshots/6531794/map.png'/>
        <Wrapper>
            <Input
                isValid={isLatValid}
                type='text'
                required
                value={!isDefaultLatTrue ? lat : ''}
                onChange={e => setLat(e)}
                placeholder='Lattitude'
            />
            {!isLatValid && <Error>please enter a valid value</Error>}
        </Wrapper>
        <Wrapper>
            <Input
                isValid={isLngValid}
                type='text'
                required
                value={!isDefaultLngTrue ? lng : ''}
                onChange={e => setLng(e)}
                placeholder='Longitude'
            />
            {!isLngValid && <Error>please enter a valid value</Error>}
        </Wrapper>    
    </Form>
);

export default SideNav;