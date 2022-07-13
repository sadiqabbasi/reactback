const get = (req,res) =>{
    res.send([
        {
            "Title" : "Alia Bhatt-Ranbir Kapoor Wedding Highlights",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "April 14 2022",
            "ImageAsset"    : "https://img.koreatimes.co.kr/upload/newsV2/images/202204/068804283d81416aa82a2daa3ba2d832.jpg/dims/resize/740/optimize",
            "BlogContent"   :  " Ranbir Kapoor and Alia Bhatt got married on April 14 in a private ceremony with family and close friends in attendance. The couple will be hosting a small, intimate reception party at their Vastu home in Mumbai, today, April 16" ,
            "Likes"         : "1M"
          },
          {
            "Title" : " Katrina Kaif And Vicky Kaushal Might Share Screen Space In Jee Le Zaraa: Report - NDTV Movies",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "January 15 2022",
            "ImageAsset"    : "https://imagevars.gulfnews.com/2020/02/25/Vicky-Kaushal-and-Katrina-Kaif_1707c43eba1_original-ratio.jpg",
            "BlogContent"   : "The film will also star Priyanka Chopra and Alia Bhatt in the lead roles along with Katrina Kaif",
            "Likes"         : "1000K"
          },
          {
            "Title" : " Tabu to star in Ajay Devgn's 'Bholaa' - the remake of Tamil blockbuster 'Kaithi' - Exclusive! - Times of India",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Januaury 14 2022",
            "ImageAsset"    : "https://static.toiimg.com/thumb/msid-88872893,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46584/88872893.jpg",
            "BlogContent"   : "The Hindi remake of Tamil blockbuster movie ‘Kaithi’ starring Ajay Devg",
            "Likes"         : "100K"
          },
          {
            "Title":"Golden Globe Awards are accolades bestowed by the 87 members of the Hollywood Foreign Press Association beginning in January 1944",
              "ImageAsset":"https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/golden-globes-1483816829.jpg?crop=1.00xw:0.752xh;0,0.0414xh&resize=1200:*",
              "CategoryName": "Hollywood",
              "PublishedDate":"Jan 10 2022",
              "Likes":"10k",
              "BlogContent":"The Golden Globes awards ceremony began in 1944. Members of the Hollywood Foreign Press Association present awards for achievement in film and television.The Power of the Dog is a 2021 Western psychological drama film[6][7][8] written and directed by Jane Campion, based on the 1967 novel of the same name by Thomas Savage. The film stars Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, and Kodi Smit-McPhee. Shot mostly across rural Otago, New Zealand"
      
          },
          {
            "ImageAsset":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShoWb4WDDvS4t6tZ13tOJ-zdnrJiIoB4yTswLx8gLjZTuYwPte",
            "Title":"Brahmāstra, is an upcoming Indian Hindi-language superhero film written and directed by Ayan Mukerji, and produced by Karan Johar. It stars Amitabh Bachchan,Ranbir Alia,Mouni & Nagarjuna",
            "CategoryName": "Bollywood",
            "PublishedDate":"December 16 2021",
            "Likes":"1000k",
            "BlogContent":"BRAHMASTRA - the Trilogy, is a 3-part film franchise and the beginning of India's first original universe - the Astraverse. It is a new original cinematic universe inspired by deeply rooted concepts and tales in Indian mythology ",
            "detailsimage":"https://imageory.clapnumber.com/albums/large/aaadum_157038631"
    
          },
    ])
}
module.exports.dbdata=get;