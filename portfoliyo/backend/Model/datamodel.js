import { Mongoose } from "mongoose";
const userSchema = new Mongoose.userSchema({
    name: String,
    email:{
        type: String,
        unique: true,
        required: [true, "Please enter"]

    },
    password:{
        type: String,
        required: [true, "Please enter Password"],
        select: false


    },


    timeline:[{
        title: String,
        descrpition: String,
        date: Date,

    }],

    skills:[{
        image1:{
            public_id: String,
            url: String,

        },
        image2:{
            public_id: String,
            url: String,
            
        },
        image3:{
            public_id: String,
            url: String,
            
        },
        image4:{
            public_id: String,
            url: String,
            
        },
        image5:{
            public_id: String,
            url: String,
            
        },
        image6:{
            public_id: String,
            url: String,
            
        }
    }],

    youtube:[
        {
           url: String,
           title: String,
           image:{
            public_id: String,
            url: String,

           }


    }
],

project:[{
    url: String,
    title: String,
    image:{
        public_id: String,
        url: String,
    },
    descrpition:String,
    techsatack:String,
    

}],
about:{
    name:String,
    title:String,
    subtitle:String,
    descrpition:String,
    quote:String,
    avatar:{
        public_id: String,
        url: String,

    }

}


});


export const user = Mongoose.model("user", userSchema);