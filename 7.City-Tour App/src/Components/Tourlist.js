import React from 'react'
import City from './City'

function Tourlist() {
	const tourData =[
	{
		id:1,
		city:'Kathmandu',
		img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.nIalnry23eTC2a2AiwSRWQHaDi%26pid%3DApi&f=1',
		name:"the most crowded cityof Napal",
		info:"this is the most Developed city out there in our country. You never regret of having here"
	},
	{
		id:2,
		city:'Bharatpur',
		img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kRyD7VewsK0fEl4bkb9nIgHaD2%26pid%3DApi&f=1',
		name:"the most coolest cityof Napal",
		info:"this is the most designed city out there in our country. You never unhapppy of having here"
	},
	{
		id:3,
		city:'Hetauda',
		img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FsAeKxVYaQxPKkcxu-3uywAAAA%26pid%3DApi&f=1',
		name:"One of must visited cityof Napal",
		info:"this is the most green city out there in our country. You never sad of having here"
	},

]

return (
		<>
			<h1>Here are Some Beautiful city Where you Must Visit Once </h1>
			{tourData.map((data)=><City data={data} key={data.id}/>
				)
			}

		</>
		
	)
}

export default Tourlist