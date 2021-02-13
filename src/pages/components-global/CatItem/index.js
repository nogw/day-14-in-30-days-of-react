import React from 'react';
import { Container, Image, Weight, Name, Origin, Temperament, Life, Description, } from './styles';

function CatItem(props) {
  return (
    <Container>
       <Image>
         <img src={props.image} alt="cat"/>
       </Image>
       <Name>
        <h1>{props.name}</h1>
       </Name> 
       <Origin>
        <h1>{props.origin}</h1>
       </Origin> 
       <Temperament>
        <h1><span>Temperament: </span>{props.temperament}</h1>
       </Temperament> 
       <Life>
        <h1><span>Life span: </span>{props.life} years</h1>
       </Life> 
       <Weight>
         <h1><span>Weight: </span>{props.weight} Kg</h1>
       </Weight>
       <Description>
        <h2>Description</h2>
        <h1>{props.description}</h1>
       </Description>
    </Container>
  );
}

export default CatItem;