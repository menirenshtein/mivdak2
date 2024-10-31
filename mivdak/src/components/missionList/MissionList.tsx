import MissionInterface from '../../types/Mission';
import Mission from '../mission/mission';

interface missionListProps{
    missionList: MissionInterface[];
    handleChangeStatus: (mission_id:string)=> void;
    handleAddMission: (mission: MissionInterface)=> void
}


const MissionList:React.FC<missionListProps> = ({missionList, handleChangeStatus, handleAddMission}) => {
  

  return (
    <div className=''>
        {missionList.map((mission)=>{
            return <Mission mission={mission} key={mission._id} handleChangeStatus={handleChangeStatus} handleAddMission={handleAddMission}/>
        })}
    </div>
  )
}

export default MissionList