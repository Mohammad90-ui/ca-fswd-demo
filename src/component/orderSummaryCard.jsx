import React from "react";

const orderSummary = ({ orderId,customerName,productName,totalPrice,orderStatus }) => {

    return(
        <>
        <div className="max-w-xs border rounded-1g shadow-1g p-4 bg-white">
            <h2 className="text-1g font-bold mt-3">{orderId}</h2>
            <p className="text-gray-700 font-semibold">{customerName}</p>
            <p className="font-bold">{productName}</p>
            <p className="text-gray-700">{totalPrice}</p>
            <p className={`mt-2 text-sm font-semibold ${orderStatus ? "text-green-600" : "text-red-600"}`}>
                {orderStatus ? "shipped" : "pending"}
            </p>
        </div>
        </>
    )

}
export default orderSummary;