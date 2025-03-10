import React from "react";

const studentCard = ({studentPhoto,name,enrollno,courseName,email}) => {
     return (
        <>
        <div className="max-w-xs border rounded-1g shadow-1g p-4 bg-white">
            <img src = {studentPhoto} alt = {name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-1g font-bold mt-3">{name}</h2>
            <p className="text-gray-700">{enrollno}</p>
            <p className="font-semibold text-gray-700">{courseName}</p>
            <p className="text-gray-700">{email}</p>
        </div>
        </>
     )
}
export default studentCard;