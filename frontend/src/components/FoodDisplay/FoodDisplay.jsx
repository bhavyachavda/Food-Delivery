import React, { useContext, Suspense, lazy } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem';

// Lazy load FoodItem component
const FoodItem = lazy(() => import("../FoodItem/FoodItem"));

const FoodDisplay = (props) => {

    const {category} = props;

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            <Suspense fallback={<div>Loading...</div>}>
            {food_list && food_list?.map((item,index)=>{
              if(category === "All" || category === item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
            })}
            </Suspense>
        </div>
    </div>
  )
}

export default FoodDisplay;
