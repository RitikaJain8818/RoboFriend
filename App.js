import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import EB from './eb.js';
import { kittens } from './kittens.js';
import { setSF } from './actions.js';
import {connect} from 'react-redux';

class App extends React.Component
{
	constructor(props)
	{	super(props);
		this.state=
		{
			kittens:kittens,
			searchField:''
		}
	}
	 ChangeOnSearch = (event)=>
	 {	this.setState({ searchField:event.target.value }) }
	render()
	  {	const { kittens , searchField }=this.state;
		const filteredkittens=this.state.kittens.filter( kittens =>{return kittens.name.toLowerCase().includes(this.state.searchField.toLowerCase())	})
		if(this.state.kittens===0){
			return <h1>LOADING...</h1>
		}
		else{
		return(
		<div className='tc'>
		<h1 className='f1'>Kitty Hostelers</h1>
		<SearchBox ChangeSearch={this.ChangeOnSearch}/>
		<EB>
			<CardList kittens={filteredkittens} />
		</EB>
		</div>
	);}
	}
}
const mapStatestoProps=(state)=>{
	return{		searchField:state.searchkittens.searchField	} }
const mapDispatchtoProps=(dispatch)=> { 
	return{ ChangeOnSearch:(event)=>(dispatch(setSF(event.target.value))) } }
export default connect(mapStatestoProps,mapDispatchtoProps)(App)