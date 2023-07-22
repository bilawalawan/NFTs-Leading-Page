import Creatorsitem from "../Creatoritem/Creatoritem";
import creator1 from "../../assets/Top Creator/Artist Avatar 1.png"
import creator2 from "../../assets/Top Creator/Artist Avatar 2.png"
import creator3 from "../../assets/Top Creator/Artist Avatar 3.png"
import creator4 from "../../assets/Top Creator/Artist Avatar 4.png"
import creator5 from "../../assets/Top Creator/Artist Avatar 5.png"
import creator6 from "../../assets/Top Creator/Artist Avatar 6.png"
import creator7 from "../../assets/Top Creator/Artist Avatar 7.png"
import creator8 from "../../assets/Top Creator/Artist Avatar 8.png"
import creator9 from "../../assets/Top Creator/Artist avatar 9.png"
import creator10 from "../../assets/Top Creator/Artist avatar 10.png"
import creator11 from "../../assets/Top Creator/Artist avatar 11.png"
import creator12 from "../../assets/Top Creator/Artist avatar 12.png"

function Creators(props) {
    return(
        <div className="mt-5">
            <div className="row ">
            <Creatorsitem src1 = {creator1} creatorname = "Keepitreal" num = "1" />
            <Creatorsitem src1 = {creator2} creatorname = "Digilab" num = "2"/>
            <Creatorsitem src1 = {creator3} creatorname = "GravityOne" num = "3"/>
            <Creatorsitem src1 = {creator4} creatorname = "Juanie" num = "4"/>
            
        </div>
          <div className="row ">
          <Creatorsitem src1 = {creator5} creatorname = "BlueWhale" num = "5"/>
          <Creatorsitem src1 = {creator6} creatorname = "Mr Fox" num = "6"/>
          <Creatorsitem src1 = {creator7} creatorname = "Shroomie" num = "7"/>
          <Creatorsitem src1 = {creator8} creatorname = "Robotica" num = "8"/>
          
      </div>
        <div className="row  ">
        <Creatorsitem src1 = {creator9} creatorname = "RustyRobot" num = "9"/>
        <Creatorsitem src1 = {creator10} creatorname = "Animakid" num = "10"/>
        <Creatorsitem src1 = {creator11} creatorname = "Dotgu" num = "11"/>
        <Creatorsitem src1 = {creator12} creatorname = "Ghiblier" num = "12"/>
        
    </div>
        </div>
    )
}

export default Creators;