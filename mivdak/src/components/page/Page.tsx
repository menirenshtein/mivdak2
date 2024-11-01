import React, { useEffect, useState } from "react"
import Form from "../form/Form"
import MissionInterface from "../../types/Mission";
import { deleteMission, getAllMissions, postNewMission, updateMission } from "../../Requests";
import MissionList from "../missionList/MissionList";

const missionList: MissionInterface[] = await getAllMissions()

const Page:React.FC = () => {
  const [missions, setMissions] = useState<MissionInterface[]>([])
  
  const loadMission = async ()=>{
    try {
      const data: MissionInterface[] = await getAllMissions()
      setMissions(data) 
    } catch (error) {
      throw new Error('not give')
    }
  }
  useEffect(()=>{
    loadMission()
  },[])

  const handleChangeStatus = async (mission_id :string)=>{
    let tempMissionList = [...missions]
    let missionFound  = tempMissionList.find(m => m._id === mission_id)
    if (missionFound != undefined) {
      missionFound.status === 'Pending' ?  missionFound.status = 'In Progress': missionFound.status = 'Completed'
      const data = await updateMission(missionFound._id!)
    }
    
    setMissions([...tempMissionList])
    loadMission()
  }

  const handleAddMission = async (newMission:MissionInterface)=>{
    let tempMissionList = [...missions]
    tempMissionList.push(newMission)
    setMissions([...tempMissionList])
    const data = await postNewMission(newMission)
    loadMission()
  }
  const handleDeleteMission = async (mission_id:string) =>{
    const a:void = await deleteMission(mission_id)  
    loadMission()  
  }
  
  return (
    <div className="Page">
        <Form/>
        <h3>Missions</h3>
        <MissionList missionList={missions} handleChangeStatus={handleChangeStatus} handleAddMission={handleAddMission} handleDeleteMission={handleDeleteMission}/>
    </div>
  )
}

export default Page