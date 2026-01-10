import {connect} from "mongoose"


const connectDb=async()=>{
    try {
        
        await connect(process.env.BD);

    } catch (error) {
        console.log("db error ",error)
    }
}

export default connectDb