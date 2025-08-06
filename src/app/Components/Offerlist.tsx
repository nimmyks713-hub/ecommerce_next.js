import Offercard from "./Offercard"
function Offerlist(){
    const offer=[
        {
            id:1,
            title:"Welcome to shopaholic| Your savings corner",
            image:[
                "/images/dress.webp",
                "/images/handbag.webp",
                "/images/necklace.webp",
                "/images/jenas.jpg"
            ],
            subtitle:[
                 "Coupons and Benefits",
                 "Bestsellers",
                 "Today's Deals",
                 "Budget Store"
            ]
        },
        {
            id:2,
            title:"Upto 20% off - Electronics",
            image:[
             "/images/Internalssd.webp",
             "/images/gamingdrive.jpg",
             "/images/siliconpower.jpg",
             "/images/playstation.jfif"
            ],
            subtitle:[
                "Internal SSD",
                 "Gaming Drive",
                 "Silicon Power",
                 "Playstation"
            ]
        },
        {
            id:3,
            title:"New arrivals|Watches and Jwellery|Upto 50% off",
            image:[
             "/images/bracelet.webp",
             "/images/goldpetite.jpg",
             "/images/whitegold.jfif",
             "/images/rosegold.webp"
            ],
            subtitle:[
            "Bracelet",
            "Gold Petite",
            "White Gold",
            "Rose Gold"
            ]
       },
       {
            id:4,
            title:"Just landed for men|Upto 40% off",
            image:[
            "/images/backpack.webp",
            "/images/tshirt.jpg",
            "/images/jacket.jpg",
            "/images/casual.webp"
            ],
            subtitle:[
               "Backpack",
               "T-Shirts",
               "Jacket",
               "Casual"
            ]
        },
        {
            id:5,
            title:"Upto 30% off - Headsets and Speakers",
            image:[
             "/images/headsets.jpg",
             "/images/earbuds.jpg",
            "/images/speakers.webp",
            "images/soundbars.jpg"
            ],
            subtitle:[
             "Headsets",
             "Earbuds",
             "Speakers",
             "Soundbars"
            ]
        },
        
        {
            id:6,
            title:"Upto 20% off-Gaming corner",
            image:[
            "/images/gamingconsole.jpg",
            "images/gamingaccessories.avif",
            "/images/pcgaming.jpg",
            "/images/headsets.jpg"
            ],
            subtitle:[
            "Gaming Console",
            "Gaming Accessories",
            "PC Gaming",
            "Digital Content"
            ]
        },
        {
            id:7,
            title:"Get your furniture assembled for free",
            image:[
             "/images/sofa.webp",
             "/images/bed.webp",
             "/images/chair.webp",
             "/images/tableset.webp"
            ],
            subtitle:[
             "Sofa",
             "Bed",
             "Chair",
             "Table set"
            ]
       },
        {
            id:8,
            title:"Frequently purchased toys| From AED 12",
            image:[
              "/images/pushpop.jpg",
              "/images/toys.webp",
              "/images/plush.avif",
              "/images/scooter.jpg"
            ],
            subtitle:[
             "Push Pop",
             "Toys",
             "Plush Toy",
             "Scooter"
            ]
        }
    ]

    
    return (
        <div style={{backgroundColor:"whitesmoke",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
            {
          offer.map((p)=>{
            return <Offercard key={p.id} title={p.title} image={p.image} subtitle={p.subtitle}/>
          })
        }
        </div>
    )
}
export default Offerlist;