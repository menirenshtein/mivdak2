import React from 'react'
import MissionInterface from '../../types/Mission'

interface missionProps{
    mission: MissionInterface;
    handleChangeStatus: (mission_id:string)=> void;
    handleAddMission: (mission: MissionInterface)=> void
}

const Mission:React.FC<missionProps> = ({mission, handleChangeStatus}):JSX.Element => {
  return (
    <div className='Mission'>
        <div className='details'>
          <h2>Name: {mission.name}</h2>
          <h3>Status: {mission.status}</h3>
          <h3>Priority : { mission.priority}</h3>
          <h3>Description : {mission.description}</h3>
        </div>
        <div className='btns'>
          <button>Delete</button>
          <button onClick={()=>{handleChangeStatus(mission._id!)}}>Progress</button>
        </div>
    </div>
  )
}

export default Mission