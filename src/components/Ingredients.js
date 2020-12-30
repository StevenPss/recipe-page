import React from 'react'
import { Checkbox } from '@material-ui/core';

function Ingredients() {
    return (
        <div>
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
        </div>
    )
}

export default Ingredients
