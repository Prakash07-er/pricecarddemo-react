import React from 'react';
import PriceCard from './PriceCard';

export default function App() {

  const pricingList = [
    {
      type :"free",
      price :"$0",
      duration: "month",
      user : "Single User",
      storage :"5GB Storage",
      noOfProjects :"Unlimited Public Projects",
      access : "Community Access",
      noOfPrivateProj : "Unlimited Private Projects",
      phone :"Dedicated Phone Support",
      domain :"Free Subdomain",
      report : "Monthly Status Reports"
    },
    {
      type :"Plus",
      price :"$9",
      duration: "month",
      user : "5 Users",
      storage : "5GB Storage",
      noOfProjects :"Unlimited Public Projects",
      access : "Community Access",
      noOfPrivateProj : "Unlimited Private Projects",
      phone :"Dedicated Phone Support",
      domain :"Free Subdomain",
      report : "Monthly Status Reports"

    },
    {
      type :"Pro",
      price :"$49",
      duration: "month",
      user : "Unlimited Users",
      storage : "150GB Storage",
      noOfProjects :"Unlimited Public Projects",
      access : "Community Access",
      noOfPrivateProj : "Unlimited Private Projects",
      phone :"Dedicated Phone Support",
      domain :" Unlimited Free Subdomain",
      report : "Monthly Status Reports"

   }
]
  return (
        <div>
          <section class="pricing py-5">
            <div class="container">
              <div class="row">
                {
                  pricingList.map((obj) => {
                    return(
                          <PriceCard data={obj}></PriceCard>
                        )
                  })
                }
              </div>
            </div>
        </section>
        </div>

  )
}

 