import mongoose , {Document} from 'mongoose';

const userSchema = mongoose.schema(
    name:{

    },
    email:{

    },
    otp:{

    },
    createdAt:{
        timestamp:true
    }
)

export const User = mongoose.model(" ", userSchema);