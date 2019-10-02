import React from 'react';
import Card from './Card.js';

const CardList = ({kittens}) =>
{
	const Cardcc=kittens.map((user,i)=>{
		return	<Card key={i} 
					  id={kittens[i].id} 
					  name={kittens[i].name} 
					  userid={kittens[i].userid} 
					  insta={kittens[i].insta}
					/>
	} )
	return(
		<div>
		{Cardcc}
		</div>	
	);
}
export default CardList;