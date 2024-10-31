import MissionInterface from '../../types/Mission';
import Mission from '../mission/Mission';

interface missionListProps{
    missionList: MissionInterface[];
    handleChangeStatus: (mission_id:string)=> void;
    handleAddMission: (mission: MissionInterface)=> void;
    handleDeleteMission: (mission_id:string)=> void;

}


const MissionList:React.FC<missionListProps> = ({missionList, handleChangeStatus, handleAddMission, handleDeleteMission}) => {
  

  return (
    <div className='MissionList'>
        {missionList.map((mission)=>{
            return <Mission mission={mission} key={mission._id} handleChangeStatus={handleChangeStatus} handleAddMission={handleAddMission} handleDeleteMission={handleDeleteMission}/>
        })}
    </div>
  )
}

export default MissionList