import React from "react";

function Card(props) {

    return (
        <div class="col mb-5">
            <div class="card h-100">
                {/* <!-- Sale badge--> */}
                {
                    props.data.sale ? <div class="badge bg-dark text-white position-absolute" style={{ "top": "0.5rem", "right": "0.5rem" }}>Sale</div> : null
                }
                {/* <!-- Product image--> */}
                <img class="card-img-top" src={props.data.img} alt="..." />
                {/* <!-- Product details--> */}
                <div class="card-body p-4">
                    <div class="text-center">
                        {/* <!-- Product Name --> */}
                        <h5 class="fw-bolder">{props.data.title}</h5>
                        {/* <!-- Product reviews--> */}
                        <p className="card-text">
                            {props.data.rating ? <i className="fa fa-star  stars" style={{ "color": "gold" }}></i> : ""}
                            {props.data.rating ? <i className="fa fa-star  stars" style={{ "color": "gold" }}></i> : ""}
                            {props.data.rating ? <i className="fa fa-star  stars" style={{ "color": "gold" }}></i> : ""}
                            {props.data.rating ? <i className="fa fa-star  stars" style={{ "color": "gold" }}></i> : ""}
                            {props.data.rating ? <i className="fa fa-star  stars" style={{ "color": "gold" }}></i> : ""}
                        </p>
                        <p className="card-text">
                            {/* strick out the price */}
                            $<span style={{ textDecoration: "line-through" }}>
                                {props.data.price1}
                            </span>{" "}{props.data.isIfen ? "-" : ""}
                            {props.data.price}
                        </p>
                        {/* <!-- Product price--> */}
                        {/* {props.data.price} */}
                        <h6 class="fw-boler">{props.data.description}</h6>
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <button disabled={props.cartItem.some((obj) => obj.id === props.data.id)} onClick={() => props.handleCart(props.data)} className="btn btn-primary mt-auto" href="#">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

