import React from 'react'

const City =({data})=>{
	return(
		<div className="Nayakura">
		  <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={data.img}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{data.city}<i class="material-icons right">+</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{data.name}<i class="material-icons right">close</i></span>
      <p>{data.info}</p>
    </div>
  </div>
</div>

	)
}
export default City



