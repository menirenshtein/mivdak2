import axios, { Axios, AxiosResponse } from "axios";
import MissionInterface from "./types/Mission";

const API_KEY: string = "8399856";
const URl: string = "https://reactexambackend.onrender.com/missions/";

export const getAllMissions = async (): Promise<MissionInterface[]> => {
  try {
    const response: AxiosResponse = await axios.get(`${URl}${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error("filed to get all data");
  }
};

export const postNewMission = async (mission: MissionInterface): Promise<MissionInterface> => {
  try {
    const response: AxiosResponse = await axios.post(`${URl}${API_KEY}`,mission);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("filed to post new mission");
  }
};
export const deleteMission = async (mission_id: string): Promise<void> => {
  try {
    const data: AxiosResponse =  await axios.delete(`${URl}${API_KEY}/${mission_id}`);
    // return data.data;
  } catch (error) {
    throw new Error("filed to delete mission");
  }
};
export const updateMission = async (mission_id: string): Promise<void> => {
  try {
    const data: AxiosResponse = await axios.post(`${URl}${API_KEY}/progress/${mission_id}`);
  } catch (error) {
    throw new Error("filed to update mission");
  }
};
