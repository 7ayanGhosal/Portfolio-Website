import React, {Component} from 'react';

import Section from '../Section/Section';
import CodingProfile from '../../Components/CodingProfile/CodingProfile';
import Aux from '../../hoc/Auxiliary';
import Navbar from '../../Components/Navigation/Navbar/Navbar';
import Sidebar from '../../Components/Navigation/Sidebar/Sidebar';
import Mail from '../../Components/Mail/Mail';
import Ribbon from '../../Components/Ribbon/Ribbon'
import Animation from '../../Components/UI/Animation/Animation';
import Intro from '../../Components/Intro/Intro';
import ProfilePic from '../../Components/ProfilePic/ProfilePic';

//IMAGES
import CC_G from '../../Assets/Codechef/Codechef_Graph.PNG';
import CC_P from '../../Assets/Codechef/Codechef_Profile.PNG';
import CF_G from '../../Assets/Codeforces/Codeforces_Graph.PNG';
import CF_P from '../../Assets/Codeforces/Codeforces_Profile.PNG';

class Layout extends Component {

    CodingProfiles = [
                    <CodingProfile graph_path={CF_G} profile_path={CF_P}
                        id={0}
                        platform={"CODEFORCES"}
                        handel={"Bigg_O"}
                        rank={"Expert"}
                        max_rating={"1646"}
                        link={'http://codeforces.com/profile/Bigg_O'}/>,
                    <CodingProfile graph_path={CC_G} profile_path={CC_P}
                        id={1}
                        platform={"CODECHEF"}
                        handel={"mastermindayan"}
                        rank={"4*"}
                        max_rating={"1839"}
                        link={'https://www.codechef.com/users/mastermindayan'}/>
    ];
    
    render(){
        return(
            <Aux>
                <Navbar/>
                <Sidebar show={false}/>
                <Mail/>
                <Ribbon/>
                <Animation>
                    <ProfilePic/>
                    <Intro />
                </Animation>
                <Section id="Coding_Profiles" 
                    count={2}
                    frames={this.CodingProfiles}
                    back_color="darkblue"
                    back_link="https://www.transparenttextures.com/patterns/bright-squares.png"
                />
                <Section id="Coding_Profiles" 
                    count={2}
                    frames={this.CodingProfiles}
                    back_color="darkblue"
                    back_link="https://www.transparenttextures.com/patterns/bright-squares.png"
                />
            </Aux>
    )};
}

export default Layout;