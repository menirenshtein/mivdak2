import React, { useEffect, useState } from "react"
import Form from "../form/Form"
import MissionInterface from "../../types/Mission";
import { getAllMissions, postNewMission, updateMission } from "../../Requests";
import MissionList from "../missionList/MissionList";

const missionList: MissionInterface[] = await getAllMissions()

const Page:React.FC = () => {
  const [missions, setMissions] = useState<MissionInterface[]>([])

  useEffect(()=>{
    const loadMission = async ()=>{
      try {
        const data: MissionInterface[] = missionList;
        setMissions(data) 
      } catch (error) {
        throw new Error('not give')
      }
    }
    loadMission()
  },[])

  const handleChangeStatus = async (mission_id :string)=>{
    let tempMissionList = [...missions]
    let missionFound  = tempMissionList.find(m => m._id === mission_id)
    console.log(missions);
    // if (missionFound != undefined) {
    //   missionFound.status === 'Pending' ?  missionFound.status = 'In Progress': missionFound.status = 'Completed'
    //   const data = await updateMission(missionFound.id!)
    // }
    console.log(missionFound);
    setMissions([...tempMissionList])
  }

  const handleAddMission = async (newMission:MissionInterface)=>{
    let tempMissionList = [...missions]
    tempMissionList.push(newMission)
    setMissions([...tempMissionList])
    const data = await postNewMission(newMission)
  }

  
  return (
    <div className="Page">
        <Form/>
        <MissionList missionList={missionList} handleChangeStatus={handleChangeStatus} handleAddMission={handleAddMission}/>

    </div>
  )
}

export default Page