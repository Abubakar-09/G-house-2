'use client'
import { useState } from "react";
import CarsCard from "./components/CarsCard";

export default function Home() {
  const [cars, setcars] = useState([
    {
      name: 'Toyota Corolla',
      price: '59.7 kacs - 75.5 lacs',
      reveiw: 629,
      img:'https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674'
    },{
      name: 'Suzuki Alto',
      price: '23.7 kacs - 30.5 lacs',
      reveiw: 202,
      img:'https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100'
    },{
      name: 'Honda City',
      price: '46.7 kacs - 58.5 lacs',
      reveiw: 457,
      img:'https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945'
    },{
      name: 'Honda Civic',
      price: '86.7 kacs - 99.5 lacs',
      reveiw: 363,
      img:'https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254'
    },
  ])

  return (
    <>
      <div className="w-[80vw] m-auto py-12 max-md:flex-col  md:h-screen flex gap-3 justify-center items-center">
        {cars.map(e=>{
          return(
            <>
            <CarsCard key={e.img} name={e.name} price={e.price} reveiw={e.reveiw} img={e.img}/>
            </>
          )
        })}
      </div>
    </>
  );
}
