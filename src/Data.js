const plans = [
    {
        plan : "FREE",
        Fee : 0,
        user : "Single User",
        storage : "5GB Storage",
        feature_flags : [1,1,0,0,0,0],  /* 1 , 0 - represents flag */
    },
    {
        plan : "PLUS",
        Fee : 9,
        user : "5 Users",
        storage : "50GB Storage",
        feature_flags : [1,1,1,1,1,0],  /* 1 , 0 - represents flag */
    },
    {
        plan : "PRO",
        Fee : 49,
        user : "Unlimited Users",
        storage : "150GB Storage",
        feature_flags : [1,1,1,1,1,1], /* 1 , 0 - represents flag */
    }
]

const features = ["Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]

export {plans,features}