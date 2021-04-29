import React  from 'react';
import './pricecard.css'
export default function PriceCard(props) {

    return(
        <>
         <div class="col-lg-4">
                    <div class="card mb-5 mb-lg-0">
                    <div class="card-body">
                        <h5 class="card-title text-muted text-uppercase text-center">{props.data.type}</h5>
                        <h6 class="card-price text-center">{props.data.price}<span class="period">/month</span></h6>
                        <hr></hr>
                        <ul class="fa-ul">
                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{props.data.user}</li>
                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{props.data.storage}</li>
                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{props.data.noOfProjects}</li>
                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{props.data.access}</li>
                        <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>{props.data.noOfPrivateProj}</li>
                        <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>{props.data.phone}</li>
                        <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>{props.data.domain}</li>
                        <li class="text-muted"><span class="fa-li"><i class="fa fa-times"></i></span>{props.data.report}</li>
                        </ul>
                        <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                    </div>
                    </div>
      </div>
        </>
    )
}