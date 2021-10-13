import React from 'react'

function Header(props) {
    const{search,handleChange,clickHandler}=props
    return (
        <div className="container-fluid">
            <div className="display-1 p-2 "><h1 className="tauko">Food Recipes</h1>
            <div className="input-group w-50 mx-auto">
                <input type="text" className="form-control" value={search} onChange={handleChange} placeholder="Enter Recipe's name..........." />
                   <button className="btn btn-dark" onClick={clickHandler}>Search</button>
                </div>
            </div>
            </div>
    )
}

export default Header