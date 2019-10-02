import React from 'react';

const Card = ({name, userid ,id, insta}) =>{
	return(
	 <div className='tc bg-pink dib br3 ma2 pa3 grow bw2 shadow-5'>
	 	<a href={insta} target="_blank" rel="nofollow"
	 	rel="noopener noreferrer" 
	 	 target="_blank">
	    <img alt='kitty hostelers' src={`https://robohash.org/${id+2}.png?set=set4&size=200x200`}/>
		<div>
			<h3>{name}</h3>
			<p>{userid}</p>
		</div>
		</a>
	 </div>
	);
}
export default Card;