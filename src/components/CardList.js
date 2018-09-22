import React from 'react';
import Card from './Card';

const  CardList=({ robots })=>
{
	/*if(true)
	{
		throw new Error('Noooooo');
	}*/
return(
		<div>
		{
		robots.map((user,i)=>
		{
			return (<Card key={i} 
			id={user.id}
			name={user.name}
			username={user.username} 
			email={user.email} />
			);
		}
			)
		}
		</div>
);
}
export default CardList;