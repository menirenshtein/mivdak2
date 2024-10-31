import React, { useEffect, useRef } from 'react'
import MissionInterface from '../../types/Mission'

interface missionProps{
    mission: MissionInterface;
    handleChangeStatus: (mission_id:string)=> void;
    handleAddMission: (mission: MissionInterface)=> void;
    handleDeleteMission: (mission_id:string)=> void;

}

const Mission:React.FC<missionProps> = ({mission, handleChangeStatus,handleDeleteMission}):JSX.Element => {
  const missionRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    missionRef.current?.style.borderColor;'green'
  },[handleChangeStatus])
  return (
    <div className='Mission' ref={missionRef}>
        <div className='details'>
          <h2>Name: {mission.name}</h2>
          <h3>Status: {mission.status}</h3>
          <h3>Priority : { mission.priority}</h3>
          <h3>Description : {mission.description}</h3>
        </div>
        <div className='btns'>
          <button onClick={()=>{handleDeleteMission(mission._id!)}}>Delete</button>
          <button onClick={()=>{handleChangeStatus(mission._id!)}}>Progress</button>
        </div>
    </div>
  )
}

export default Mission