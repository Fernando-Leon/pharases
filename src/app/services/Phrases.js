import axios from "axios";

const Phrases = async (url) => {
    const response = await axios.get(url);
    return response.data;
};

export default Phrases;