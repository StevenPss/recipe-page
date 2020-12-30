import React from 'react';
import Footer from './Footer';
import HeaderTitleDescription from './HeaderTitleDescription';
import HeaderBanner from './HeaderBanner';
import PrepTimes from './PrepTimes';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Sources from './Sources';

function Content() {
    return (
        <div className="lg:px-40 md:px-10 px-4">
        {/** div for title, description & image div*/}
        <div className="flex flex-col">
          <HeaderTitleDescription/>
           {/** div for image & contents*/}
           <div className="flex flex-col">
              <HeaderBanner/>
              <div className="lg:flex lg:flex-row lg:justify-between">
                  <PrepTimes/>
                  {/** div for ingredients*/}
                  <div className="flex mt-6">
                    <div className="flex flex-col">
                      <Ingredients/>
                      <Instructions/>
                      <Sources/>
                    </div>
                  </div>
              </div>              
           </div>
        </div>
        <Footer/>
      </div>
    )
}

export default Content
