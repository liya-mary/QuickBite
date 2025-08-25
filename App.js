import React from "react";
import ReactDOM from "react-dom/client"



/*
Header
 -Logo
 -Nav items
Body 
 -Search
 -Restaurant container
    -img
    -name of res, star rating, cuisines, delivery time
Footer
 -Copyright
 -Links
 -Contact
 
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://dcassetcdn.com/design_img/416827/153641/153641_3146751_416827_thumbnail.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />

            </div>

        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpFj4-Br8epkyTZtOnycOAr9Y_QULqTTQGA&s" />
            <h4>Meghna foods</h4>
            <h5>Biriyani, South Indian, Asian</h5>
            <h5>4.4 Stars</h5>
            <h5>30 mins</h5>
        </div>
    )

}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)