import React , {Component} from 'react';
import CodingProfile from './CodingProfile/CodingProfile';
import classes from './CodingProfiles.css';
// IMPORT THE IMAGES HERE PASS THE PATH TO THE SUBCOMPONENT
import CC_G from '../../Assets/Codechef/Codechef_Graph.PNG';
import CC_P from '../../Assets/Codechef/Codechef_Profile.PNG';

import CF_G from '../../Assets/Codeforces/Codeforces_Graph.PNG';
import CF_P from '../../Assets/Codeforces/Codeforces_Profile.PNG';

class CodingProfiles extends Component{
    render(){
        return(
            <div style={{'width': '100vw', 'overflow': 'hidden'}}>
                <div id="CodingProfiles" className={classes.CodingProfiles}>
                    <CodingProfile graph_path={CF_G} profile_path={CF_P}
                        id={0}
                        platform={"CODEFORCES"}
                        handel={"Bigg_O"}
                        rank={"Expert"}
                        max_rating={"1646"}
                        link={'http://codeforces.com/profile/Bigg_O'}/>
                    <CodingProfile graph_path={CC_G} profile_path={CC_P}
                        id={1}
                        platform={"CODECHEF"}
                        handel={"mastermindayan"}
                        rank={"4*"}
                        max_rating={"1839"}
                        link={'https://www.codechef.com/users/mastermindayan'}/>
                </div>
            </div>
        )
    }
}

export default CodingProfiles;