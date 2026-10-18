import axios from "axios";

const commonApi=async(reqmethord,requrl,reqdata)=>{

    const config={
        method:reqmethord,
        url:requrl,
        data:reqdata
    }

    return await axios(config)
}

export default commonApi