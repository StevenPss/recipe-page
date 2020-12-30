import './App.css';
import Icon6dots from './static/6dots.svg';
import HeaderImage from './static/photo1.png';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Checkbox } from '@material-ui/core';

function App() {
  return (
    <div className="app bg-white">
      <div className="lg:px-40 md:px-10 px-4">
        {/** div for title, description & image div*/}
        <div className="flex flex-col">
          {/** div for title & description*/}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mt-4 mb-4" style={{fontFamily: 'Play Fair Display'}}>Classic Cheesecake Recipe</h1>
            {/** div for icon & description*/}
            <div className="flex flex-row">
              <div className="top-0 left-0 relative mt-1">
                <img className="w-5 mr-4" src={Icon6dots} alt="6dotsIcon"/>
              </div>
              <p className="text-sm w-72 mb-4">Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
            </div>
          </div>

           {/** div for image & contents*/}
           <div className="flex flex-col">
              <div className="flex">
                <img className="rounded-lg" src={HeaderImage} alt=""/>
              </div>

              <div className="lg:flex lg:flex-row lg:justify-between">
                  {/** div for preps*/}
                  <div className="flex flex-col mt-6 lg:bg-white lg:shadow-lg lg:py-10 lg:px-10 lg:order-last lg:h-72 lg:rounded-md">
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

                  {/** div for ingredients*/}
                  <div className="flex mt-6">
                    <div className="flex flex-col">
                      <div style={{fontFamily: 'Play Fair Display'}}>
                        <h4 className="font-bold text-2xl">Ingredients</h4>
                        <h6 className="italic text-xl mb-4">Graham Cracker Crust</h6>
                      </div>
                      {/** div for ingredients checklist*/}
                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">1 and 1/2 cups (150g) <span className="font-bold">graham cracker crumbs</span> (about 10 full sheet graham crackers)</p>
                      </div>

                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">5 Tablespoons (70g) <span className="font-bold">unsalted butter</span>, melted</p>
                      </div>

                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">1/4 cup (50g) <span className="font-bold">granulated sugar</span></p>
                      </div>

                      <h6 className="italic text-xl mb-4 mt-4" style={{fontFamily: 'Play Fair Display'}}>Cheesecake</h6>

                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">four 8-ounce blocks (904g) full-fat <span className="font-bold">cream cheese</span>, softened to room temperature</p>
                      </div>

                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">1 cup (200g) <span className="font-bold">granulated sugar</span></p>
                      </div>

                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">1 cup (240g) full-fat <span className="font-bold">sour cream</span>, at room temperature</p>
                      </div>

                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">1 teaspoon <span className="font-bold">pure vanilla extract</span></p>
                      </div>

                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">2 teaspoons <span className="font-bold">fresh lemon juice</span> (optional, but recommended)</p>
                      </div>

                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">3 large <span className="font-bold">eggs</span>, at room temperature</p>
                      </div>

                      <div className="flex flex-row">
                        <div className="top-0 left-0 relative">
                          <Checkbox/>
                        </div>
                        <p className="text-sm md:w-96">topping suggestions: <span className="italics">salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</span> (recipe in notes)</p>
                      </div>


                      <h4 className="font-bold text-2xl mt-4 mb-4" style={{fontFamily: 'Play Fair Display'}}>Instructions</h4>

                      <div className="flex flex-row mb-4">
                        <div className="top-0 left-0 relative bg-yellow-500 w-10 h-10 px-2 py-2 text-center font-bold text-sm text-white rounded-md mr-4">1</div>
                        <p className="text-sm w-64 md:w-96">Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).</p>
                      </div>

                      <div className="flex flex-row mb-4">
                        <div className="top-0 left-0 relative bg-yellow-500 w-10 h-10 px-2 py-2 text-center font-bold text-sm text-white rounded-md mr-4">2</div>
                        <p className="text-sm w-64 md:w-96"><span className="font-bold">Make the crust:</span> Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.</p>
                      </div>

                      <div className="flex flex-row mb-4">
                        <div className="top-0 left-0 relative bg-yellow-500 w-10 h-10 px-2 py-2 text-center font-bold text-sm text-white rounded-md mr-4">3</div>
                        <p className="text-sm w-64 md:w-96"><span className="font-bold">Make the filling:</span> Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can.</p>
                      </div>

                      <div className="flex flex-row mb-4">
                        <div className="top-0 left-0 relative bg-yellow-500 w-10 h-10 px-2 py-2 text-center font-bold text-sm text-white rounded-md mr-4">4</div>
                        <p className="text-sm w-64 md:w-96"><span className="font-bold">Prepare the simple water bath (see note)</span> Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)</p>
                      </div>

                      <div className="flex flex-row mb-4">
                        <div className="top-0 left-0 relative bg-yellow-500 w-10 h-10 px-2 py-2 text-center font-bold text-sm text-white rounded-md mr-4">5</div>
                        <p className="text-sm w-64 md:w-96">Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.</p>
                      </div>

                      <div className="flex flex-row mb-4">
                        <div className="top-0 left-0 relative bg-yellow-500 w-10 h-10 px-2 py-2 text-center font-bold text-sm text-white rounded-md mr-4">6</div>
                        <p className="text-sm w-64 md:w-96">Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.</p>
                      </div>

                      <div className="flex flex-row mb-4">
                        <div className="top-0 left-0 relative bg-yellow-500 w-10 h-10 px-2 py-2 text-center font-bold text-sm text-white rounded-md mr-4">7</div>
                        <p className="text-sm w-64 md:w-96">Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.</p>
                      </div>

                      <div className="flex flex-row mb-10">
                        <p className="text-sm text-gray-500">Source: <span><a href="https://sallysbakingaddiction.com/classic-cheesecake/" target="_blank">https://sallysbakingaddiction.com/classic-cheesecake/</a></span></p>
                      </div>

                    </div>
                  </div>
              </div>              
           </div>
        </div>
        <footer class="flex items-center justify-center text-gray-500 py-3">
            <span class="mr-1"><a href="https://github.com/StevenPss">StevenPss </a></span>@ <span class="hover:text-gray-600 ml-1"><a href="https://devchallenges.io">DevChallenges.io</a></span>
        </footer>
      </div>
    </div>
  );
}

export default App;
