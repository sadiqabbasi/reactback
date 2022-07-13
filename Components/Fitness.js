const get = (req,res) =>{
    res.send([
        {
            "Title":"active stretching",
            "Likes":"1000k",
            "PublishedDate" : "April 31 2020",
            "BlogContent" :"Active stretching is also often referred to as static active stretching — which means nonmoving — because the end position of the stretch is held for a set amount of time.",
            "ImageAsset":"https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/03/active-open-chest-stretch-1296x728-header.jpg?w=1575",
          },
          {
            "Title":"Rowing or paddling after age 60",
            "Likes":"1000k",
            "PublishedDate" : "April 9 2020",
            "BlogContent" :"Water sports that use oars or paddles are effective forms of exercise with many health benefits. However, the sports may pose health risks, especially after age 60. The sports have a repetitive component to them.",
            "ImageAsset": "https://domf5oio6qrcr.cloudfront.net/medialibrary/12710/42e65305-f94e-4be0-988c-bd294e1bb9aa.jpg",
    
          },
          {
            "Title":"Warming up to the cold: Staying active in any weather",
            "Likes":"1000k",
            "PublishedDate" : "September 11 2022",
            "BlogContent" :"Its difficult to get motivated to be active outside during cold-weather months, but it’s important to your health and can help you meet any fitness goals you’re trying to reach. There are ways to get outside and moving in cold temperatures.",
            "ImageAsset": "https://domf5oio6qrcr.cloudfront.net/medialibrary/12432/3957075c-0fd1-45e2-a39f-71d280a958d7.png",
          },
    ])
}
module.exports.dbdata=get;