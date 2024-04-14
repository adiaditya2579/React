import React from "react";
function Card() {
    var data = [
      {
        image:
          "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9uJTIwZWNvbWVyY2V8ZW58MHx8MHx8fDA%3D",
        productName: "Amezon",
        discription:
          "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy",
        instock:true
      },
      {
        image:
          "https://images.unsplash.com/photo-1619948543232-c515a389c22d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlJTIwZGl2Y2VzfGVufDB8fDB8fHww",
        productName: "Apple",
        discription:
          "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy",
        instock:false
      },
      {
        image:
          "https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWljcm9zb2Z0fGVufDB8fDB8fHww",
        productName: "microsoft",
        discription:
          "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy",
        instock:true
      },
      {
        image:
          "https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
        productName: "My Imag",
        discription:
          "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy",
        instock:false
      }
    ];
    return (
      <div className="w-full h-screen flex flex-wrap justify-center items-center gap-8 ">
        {data.map((elem, index) => (
          <div key={index} className="w-52 bg-black rounded-md overflow-hidden">
              <div className=" w-full h-32 bg-zinc-300">
                <img
                  className="w-full h-full object-cover object-center"
                  src={elem.image}
                />
              </div>
              <div className="w-full px-2 py-3">
                <h2 className="text-white font-bold">{elem.productName}</h2>
                <p className="text-white  mt-3  text-xs">{elem.discription}</p>
                <button className={`text-white  px-4 py-2 rounded mt-3 ${elem.instock ? " bg-blue-600": " bg-red-600"}`}>
                  {elem.instock ? "Instock": "Out of Stock"}
                </button>
              </div>
            </div>
        ))}
      </div>
    );


}
export default Card;
