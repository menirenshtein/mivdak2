import React, { useEffect, useRef } from 'react'
import MissionInterface from '../../types/Mission'

interface missionProps{
    mission: MissionInterface;
    handleChangeStatus: (mission_id:string)=> void;
    handleAddMission: (mission: MissionInterface)=> void;
    handleDeleteMission: (mission_id:string)=> void;

}
const Mission: React.FC<missionProps> = ({ mission, handleChangeStatus, handleDeleteMission }): JSX.Element => {
  const missionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (missionRef.current) {
      if (mission.status === 'Pending') {
        missionRef.current.style.backgroundColor = '#910000';
      }
      if (mission.status === 'In Progress') {
        missionRef.current.style.backgroundColor = '#BE7D00';
        console.log(missionRef.current.style.backgroundColor);
      }
      if (mission.status === 'Completed') {
        missionRef.current.style.backgroundColor = '#009114';
      }
    }
  }, [mission.status]); // Add mission.status as a dependency

  return (
    <div className='Mission' ref={missionRef}>
        <div className='details'>
          <h2>Name: {mission.name}</h2>
          <h3>Status: {mission.status}</h3>
          <h3>Priority : { mission.priority}</h3>
          <h3>Description : {mission.description}</h3>
        </div>
        <div className='btns'>
          <button onClick={()=>{handleDeleteMission(mission._id!)}} className='deleteBtn' >Delete</button>
          <button onClick={()=>{handleChangeStatus(mission._id!)}} className='progressBtn'>Progress</button>
        </div>
    </div>
  )
}

export default Mission