import React from 'react'

function Contactus() {
    let links = [
        {
            linkName: "Email",
            link: "http.//",
        }, 
    {
        linkName: "LinkedIn",
        link: "http.//",
    }, 
    {
        linkName: "Insta",
        link: "http.//",
    },
    ]
  return (
    <>
    <span className=" block w-[90%] pt-[10%] mx-auto border-t  border-gray-400 border-solid"></span>

    <div className=" mx-auto w-[90%] ">
        <div className="flex md:flex-row md:mt-[-3%] flex-col items-start justify-center mx-auto md:items-center md:justify-around mb-[6%]">
            {links.map((item) => (
            <div className="flex-col pb-[2%]">
                <h2 key={item.id} className="py-2 mx:text-xl text-2xl">{item.linkName}</h2>
                <p className=" font-extralight cursor-pointer">{item.link}</p>
                </div>

            ))}
       </div>
    </div>
    </>
  )
}

export default Contactus