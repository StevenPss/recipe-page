import React from 'react'
import Icon6dots from '../static/6dots.svg';

function HeaderTitleDescription() {
    return (
        <div className="flex flex-col"> {/** div for title & description*/}
            <h1 className="text-3xl font-bold mt-4 mb-4" style={{fontFamily: 'Play Fair Display'}}>Classic Cheesecake Recipe</h1>
            {/** div for icon & description*/}
            <div className="flex flex-row">
                <div className="top-0 left-0 relative mt-1">
                    <img className="w-5 mr-4" src={Icon6dots} alt="6dotsIcon"/>
                </div>
                <p className="text-sm w-72 mb-4">Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
            </div>
      </div>
    )
}

export default HeaderTitleDescription
