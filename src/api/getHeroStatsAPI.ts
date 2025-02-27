import axios from "axios";

export const getHeroStatsAPI = async () => {
  try {
    const res = await axios.get("https://api.opendota.com/api/heroStats");
    console.log(res)
    return res.data;
  } catch {
    return [];
  }
};
