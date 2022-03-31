import React from "react";


function Cartitems(props) {
    return (
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                {/*============= item Title ============= */}
                <div class="fw-bold">{props.item.title}</div>
                {/*============= item Price ============= */}
                {props.item.price}
            </div>
            {/*====================== Remove the item from the cart ================== */}

            <button onClick={() => props.handleRemoveCart(props.item)} class="btn badge bg-danger rounded-pill">X</button>
        </li>
    )
}

export default Cartitems