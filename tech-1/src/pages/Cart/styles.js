import styled from 'styled-components';

export const Container = styled.ul`
display: flex;
justify-content:center;
`;


export const ContainerList = styled.ul`
width: 100%;
background-color: #fff;
flex-direction: column;
justify-content: center;
border-radius: 5px;
padding: 36px 44px;
align-items: center;
margin-top: 45px;
max-width: 958;
`;

export const TravelItem = styled.li`
width: 100%;
display: flex;
margin-botton: 10px;
padding: 10px 0;
border-bottom: 1px solid #666;
justify-content: space-between;

img {
    height: 100px;
}
`;

export const Info = styled.div`
display: flex;
flex-direction: column;
align-item: center;
justify-content: center;

p {
    font-size: 14px;
    font-weight: 600;
}
strong {
    font-size: 14px;
    font-weight: 600;
}
`;

export const Quantity = styled.input`
font-size: 16px;
color: #666;
padding: 6px;
border-radius: 5px;
width: 40px;
height: 40px;
border: 1px solid #0676d9;
text-align: center;
`;

export const Subtotal = styled.div`
display: flex;
font-weight: 600;
font-size: 16px;
align-item: right;

p {
    margin-right: 10px;
}

button{
width: 40px;
height: 40px;
}
`;

export const Total = styled.div`
padding: 20px;
display: flex;
font-weight: 600;
font-size: 30px;
align-item: right;


strong {
    font-size:25px;
    font-weight: 600;
}
`;
export const Cost = styled.div`
padding: 20px;
display: flex;
justify-content:end;
font-weight:600;
font-size: 20px;
align-item: left;

`;
export const Pagar = styled.div`
padding: 20px;
display: flex;
justify-content:end;
align-items:baseline;
font-weight:600;
font-size: 20px;
align-item: left;

`;
export const Id = styled.div``;
