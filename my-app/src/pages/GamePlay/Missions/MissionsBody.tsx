import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle";
import { ReactComponent as Daily1 } from "assets/missions/Daily1.svg";
import { ReactComponent as Daily2 } from "assets/missions/Daily2.svg";
import { ReactComponent as DB1 } from "assets/missions/DB1.svg";
import { ReactComponent as DB2 } from "assets/missions/DB2.svg";
import { ReactComponent as DBGT1 } from "assets/missions/DBGT1.svg";
import { ReactComponent as DBGT2 } from "assets/missions/DBGT2.svg";
import { ReactComponent as DBS1 } from "assets/missions/DBS1.svg";
import { ReactComponent as DBS2 } from "assets/missions/DBS2.svg";
import { ReactComponent as DBZ1 } from "assets/missions/DBZ1.svg";
import { ReactComponent as DBZ2 } from "assets/missions/DBZ2.svg";
import { ReactComponent as Farmer1 } from "assets/missions/Farmer1.svg";
import { ReactComponent as Farmer2 } from "assets/missions/Farmer2.svg";
import { useState } from "react";
import { useParams } from "react-router";
import { FarmerMissions } from "./FarmerMissions";
import { DailyMissions } from "./DailyMissions";
import { DbMissions } from "./DbMissions";
import { DBZMissions } from "./DBZMissions";
import { DBGTMissions } from "./DBGTMissions";
import { DBSMissions } from "./DBSMissions";

const MainMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MissionsBody = () => {
  const { missionName } = useParams();

    const [isHoveredDaily, setIsHoveredDaily] = useState(false);
    const [isHoveredDB, setIsHoveredDB] = useState(false);
    const [isHoveredDBGT, setIsHoveredDBGT] = useState(false);
    const [isHoveredDBS, setIsHoveredDBS] = useState(false);
    const [isHoveredFarmer, setIsHoveredFarmer] = useState(false);
    const [isHoveredDBZ, setIsHoveredDBZ] = useState(false);
    
    const WitchMissions = () => {
      switch (missionName){
        case 'farmer':
          return (<FarmerMissions />)
      case 'daily':
        return (<DailyMissions />)
        case 'db':
        return (<DbMissions />)
        case 'dbz':
        return (<DBZMissions />)
        case 'dbgt':
        return (<DBGTMissions />)
        case 'dbs':
        return (<DBSMissions />)
        default:
          return (
            <>
          <a onMouseEnter={()=>{setIsHoveredFarmer(true)}} onMouseLeave={()=>{setIsHoveredFarmer(false)}} href="/missions/farmer">{isHoveredFarmer ? <Farmer2 /> : <Farmer1 />}</a>
          <a onMouseEnter={()=>{setIsHoveredDaily(true)}} onMouseLeave={()=>{setIsHoveredDaily(false)}} href="/missions/daily" >{isHoveredDaily ? <Daily2/> : <Daily1 />}</a>
          <a onMouseEnter={()=>{setIsHoveredDB(true)}} onMouseLeave={()=>{setIsHoveredDB(false)}} href="/missions/db">{isHoveredDB ? <DB2 /> : <DB1 />}</a>
          <a onMouseEnter={()=>{setIsHoveredDBZ(true)}} onMouseLeave={()=>{setIsHoveredDBZ(false)}} href="/missions/dbz">{isHoveredDBZ ? <DBZ2 /> : <DBZ1 />}</a>
          <a onMouseEnter={()=>{setIsHoveredDBGT(true)}} onMouseLeave={()=>{setIsHoveredDBGT(false)}} href="/missions/dbgt">{isHoveredDBGT ? <DBGT2 /> : <DBGT1 />}</a>
          <a onMouseEnter={()=>{setIsHoveredDBS(true)}} onMouseLeave={()=>{setIsHoveredDBS(false)}} href="/missions/dbs">{isHoveredDBS ? <DBS2 /> : <DBS1 />}</a>
          </>
          )
        }
  }
    
  return (
    <MainMenu>
      <SubTitle title="Missions" />
    {WitchMissions()}
    </MainMenu>
  );
};
