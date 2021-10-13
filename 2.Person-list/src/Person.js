import React from 'react'

function Person(props) {
	const {img,name,job,desc}=props.person
    return (
    		<div className="sabai">
		      <div className="card">
		        <div className="card-image">
		          <img src={img} />
		          <span className="card-title">{name}</span>
		        </div>
		        <div className="card-content">
		          <p>{job}</p>
		          <p>{desc}</p>
		        </div>
		      	</div>
		    </div>
    )
}

export default Person
