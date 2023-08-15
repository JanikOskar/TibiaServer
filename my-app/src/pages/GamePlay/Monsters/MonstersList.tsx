import { ReactComponent as Amebo } from "assets/monsters/Amebo.svg";
import { ReactComponent as Undeads } from "assets/monsters/Undeads.svg";
import { ReactComponent as Animals } from "assets/monsters/Animals.svg";
import { ReactComponent as Bandits } from "assets/monsters/Bandits.svg";
import { ReactComponent as Assassins } from "assets/monsters/Assassins.svg";
import { ReactComponent as Androids } from "assets/monsters/Androids.svg";
import { ReactComponent as Tanks } from "assets/monsters/Tanks.svg";
import { ReactComponent as Pirates } from "assets/monsters/Pirates.svg";
import { ReactComponent as Zeltajin } from "assets/monsters/Zeltajin.svg";
import { ReactComponent as Saibamans } from "assets/monsters/Saibamans.svg";
import { ReactComponent as Machines } from "assets/monsters/Machines.svg";
import { ReactComponent as Saiyans } from "assets/monsters/Saiyans.svg";
import { ReactComponent as Majins } from "assets/monsters/Majins.svg";
import { ReactComponent as EagleFighters } from "assets/monsters/EagleFighters.svg";
import { ReactComponent as Elementals } from "assets/monsters/Elementals.svg";
import { ReactComponent as Friezas } from "assets/monsters/Friezas.svg";
import { ReactComponent as HeavenSoldiers } from "assets/monsters/HeavenSoldiers.svg";
import { ReactComponent as Janembas } from "assets/monsters/Janembas.svg";
import { ReactComponent as Namekjins } from "assets/monsters/Namekjins.svg";
import { ReactComponent as Oozaru } from "assets/monsters/Oozaru.svg";
import { ReactComponent as Tsufurins } from "assets/monsters/Tsufurins.svg";
import { ReactComponent as Soldiers } from "assets/monsters/Soldiers.svg";
import { ReactComponent as Cells } from "assets/monsters/Cells.svg";
import { ReactComponent as Shins } from "assets/monsters/Shins.svg";
import { ReactComponent as Buus } from "assets/monsters/Buus.svg";
import { ReactComponent as FutureAndroids } from "assets/monsters/FutureAndroids.svg";
import { ReactComponent as Shenrons } from "assets/monsters/Shenrons.svg";

import { MonstersTableElements } from "./MonstersTableElements";


export const MonstersList = () => {

  return (
    <>
   <MonstersTableElements name={"Amebo"} svg={<Amebo />}  level='1-5' />
   <MonstersTableElements name={"Undeads"} svg={<Undeads />}  level='1-100' />
   <MonstersTableElements name={"Animals"} svg={<Animals />}  level='1-50' />
   <MonstersTableElements name={"Bandits"} svg={<Bandits />}  level='5-25' />
   <MonstersTableElements name={"Assassins"} svg={<Assassins />}  level='10-100' />
   <MonstersTableElements name={"Androids"} svg={<Androids />}  level='25' />
   <MonstersTableElements name={"Tanks"} svg={<Tanks />}  level='25' />
   <MonstersTableElements name={"Pirates"} svg={<Pirates />}  level='25' />
   <MonstersTableElements name={"Zeltajin"} svg={<Zeltajin />}  level='25-75' />
   <MonstersTableElements name={"Saibamans"} svg={<Saibamans />}  level='25-100' />
   <MonstersTableElements name={"Machines"} svg={<Machines />}  level='25-150' />
   <MonstersTableElements name={"Saiyans"} svg={<Saiyans />}  level='25-150' />
   <MonstersTableElements name={"Majins"} svg={<Majins />}  level='25-300' />
   <MonstersTableElements name={"Eagle Fighters"} svg={<EagleFighters />}  level='50' />
   <MonstersTableElements name={"Elementals"} svg={<Elementals />}  level='50-75' />
   <MonstersTableElements name={"Friezas"} svg={<Friezas />}  level='50-100' />
   <MonstersTableElements name={"Heaven Soldiers"} svg={<HeavenSoldiers />}  level='50-150' />
   <MonstersTableElements name={"Janembas"} svg={<Janembas />}  level='50-200' />
   <MonstersTableElements name={"Namekjins"} svg={<Namekjins />}  level='50-200' />
   <MonstersTableElements name={"Oozaru"} svg={<Oozaru />}  level='50-200' />
   <MonstersTableElements name={"Tsufurins"} svg={<Tsufurins />}  level='50-200' />
   <MonstersTableElements name={"Soldiers"} svg={<Soldiers />}  level='75' />
   <MonstersTableElements name={"Cells"} svg={<Cells />}  level='75-200' />
   <MonstersTableElements name={"Shins"} svg={<Shins />}  level='100-150' />
   <MonstersTableElements name={"Buus"} svg={<Buus />}  level='100-150' />
   <MonstersTableElements name={"Future Androids"} svg={<FutureAndroids />}  level='200' />
   <MonstersTableElements name={"Shenrons"} svg={<Shenrons />}  level='300' />
   </>
  );
};
