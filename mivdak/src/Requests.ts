import axios, { Axios, AxiosResponse } from "axios";
import MissionInterface from "./types/Mission";
import dotenv from 'dotenv'
// const API_KEY = process.dotenv.API_KEY || ""

const API_KEY: string = "8399856";
const URl: string = "https://reactexambackend.onrender.com/missions";

export const getAllMissions = async (): Promise<MissionInterface[]> => {
  try {
    const data: MissionInterface[] = (await axios.get(`${URl}${API_KEY}`)).data;
    return data;
  } catch (error) {
    throw new Error("filed to get all data");
  }
};

export const postNewMission = async (
  mission: MissionInterface
): Promise<MissionInterface> => {
  try {
    const data: MissionInterface = (
      await axios.post(`${URL} ${API_KEY}`, mission)
    ).data;
    return data;
  } catch (error) {
    throw new Error("filed to post new mission");
  }
};
export const deleteMission = async (
  mission_id: string
): Promise<MissionInterface> => {
  try {
    const data: MissionInterface = (
      await axios.delete(`${URL} ${API_KEY} ${mission_id}`)
    ).data;
    return data;
  } catch (error) {
    throw new Error("filed to delete mission");
  }
};
export const updateMission = async (
  mission_id: string
): Promise<MissionInterface> => {
  try {
    const data: MissionInterface = (
      await axios.post(`${URL} ${API_KEY} ${mission_id}`)
    ).data;
    return data;
  } catch (error) {
    throw new Error("filed to update mission");
  }
};
