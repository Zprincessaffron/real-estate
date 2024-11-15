import React from 'react'

function PopularListing({ listing,index }) {
  return (
    <div className="listing-card" key={index}  style={{ backgroundImage: `url(${listing.image})` }}>
                <div className='overlay-cardd'>
                <div className="listing-image">
                    <div className="listing-status">{listing.status}</div>
                  </div>
                  <div className="listing-info">
                    <div className="listing-price">{listing.price}</div>
                    <div className="listing-address">{listing.address}</div>
                    <div className="listing-details">
                      <span>{listing.beds} Beds</span> · <span>{listing.baths} Baths</span> · <span>{listing.sqFt} Sq. Ft.</span>
                    </div>
                  </div>
                </div>
                </div>
  )
}

export default PopularListing