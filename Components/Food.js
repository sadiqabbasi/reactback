const get=(req, res)=>{
    res.send([
          {
           "Title": "Pizza...",
           "Likes":"1M",
           "PublishedDate" : "August 9 2020",
            "BlogContent" : "Marinara pizza is made using 100% all-vegan ingredients, combining tomato sauce with olive oil, garlic, basil and oregano on a fluffy Neapolitan base. It’s low on calories too, so you can gobble without the guilt.",
            "ImageAsset":"https://www.fashionbeans.com/wp-content/uploads/2019/05/foodtrends-12.jpg",
          },
          {
           "Title": "BBQ Dreamz...",
           "Likes":"3M",
           "PublishedDate":"October 16 2022",
            "BlogContent" : "BBQ Dreamz, which rose to fame on the BBC’s Million Pound Menu, can be found at John Lewis Oxford Street throughout the summer of 2019, while Sarap, under the guidance of chef Budgie Montoya, has recently spun its acclaimed Soho pop-up into a longer summer gig in Brixton Village. Kain tayo!",
            "ImageAsset":"https://www.fashionbeans.com/wp-content/uploads/2019/05/foodtrends-1.jpg",
          },
          {
            "Title": "Fruit and Vegetable Juice",
            "Likes":"2M",
            "PublishedDate" : "June 9 2020",
             "BlogContent" : "Fruit juice is a highly concentrated source of fruit sugar. This can raise your blood sugar quickly, and that’s why juice is not recommended for people with type 2 diabetes.",
             "ImageAsset":"https://joybauer.com/wp-content/uploads/2016/02/thumb_2021_content_big_wide-150x150.jpg",
           },
           {
            "Title": "Grilled Pineapple for Dinner and Dessert",
            "Likes":"1M",
            "PublishedDate":"December 16 2021",
             "BlogContent" : "Pineapple is one of those fabulous fruits that takes my taste buds on a tropical vacation! I can eat pineapple plain, no problem, but lately I’ve been grilling it to get that hint of smoky summer flavor and adding to sandwiches and desserts.",
             "ImageAsset":"https://food.fnr.sndimg.com/content/dam/images/food/editorial/blog/legacy/healthyeats/2009/7/pineappletempeh2_lead.jpg.rend.hgtvcom.231.174.suffix/1505155524571.jpeg",
           },
    ])
}
module.exports.dbdata=get;