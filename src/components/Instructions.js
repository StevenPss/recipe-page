import React from 'react'

function Instructions() {
    return (
        <div>
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
        </div>
    )
}

export default Instructions
