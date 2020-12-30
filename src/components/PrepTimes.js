import React from 'react'
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function PrepTimes() {
    return (
        <div className="flex flex-col mt-6 lg:bg-white lg:shadow-lg lg:py-10 lg:px-10 lg:order-last lg:h-72 lg:rounded-md"> {/** div for preps*/}
        <div className="flex flex-row mb-4 lg:mb-6">
          <LocalDiningIcon fontSize="small" className="text-yellow-600 mr-2"/>
          <div>
            <h5 className="uppercase text-gray-400 font-bold text-xs">Yields</h5>
            <p className="text-yellow-600 text-sm">Servings</p>
          </div>
        </div>
        {/** 3 div for prep times*/}
        <div className="flex justify-between flex-row lg:flex-col">
          <div className="flex lg:mb-6">
            <AccessTimeIcon fontSize="small" className="text-gray-600 mr-2"/>
            <div>
              <h5 className="uppercase text-gray-400 font-bold text-xs">Prep time</h5>
              <p className="text-sm">45 minutes</p>
            </div>
          </div>

          <div className="flex lg:mb-6">
            <AccessTimeIcon fontSize="small" className="text-gray-600 mr-2"/>
            <div>
              <h5 className="uppercase text-gray-400 font-bold text-xs">Cook time</h5>
              <p className="text-sm">1 hour</p>
            </div>
          </div>

          <div className="flex">
            <AccessTimeIcon fontSize="small" className="text-gray-600 mr-2"/>
            <div>
              <h5 className="uppercase text-gray-400 font-bold text-xs">Total time</h5>
              <p className="text-sm">7,75 hours</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PrepTimes
