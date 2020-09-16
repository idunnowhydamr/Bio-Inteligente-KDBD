import React from 'react'
import "../css/Card.css"

function Cards(props) {
    return(
<div className="container">
<div class="card-deck mb-3 text-center">
{
  props.data.map((item, index)=>{
    return(
      <div key = {`pricing-${index}`} class="card mb-4 shadow-sm">
      <div class="card-header">
    <h4 class="my-0 font-weight-normal">{item.producto}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title"> {item.cost}<small class="text-muted"></small></h1>
        <ul class="list-unstyled mt-3 mb-4">
    <li>{item.users}</li>
    <li>{item.storage}</li>
    <li>{item.support}</li>
    <li>{item.help}</li>
        </ul>
    <button type="button" class="btn btn-lg btn-block btn-outline-primary">
      <img className="Carrito" src={item.buttonInfo}/>
    </button>
      </div>
    </div>
    )
  })
}


 
  </div>
</div>
    )
}

export default Cards