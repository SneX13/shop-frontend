import axios from "axios";

export default axios.create({
    baseURL: "https://greatgames-demo-default-rtdb.firebaseio.com/",
    headers: {
        "Content-type": "application/json"
    }
});
