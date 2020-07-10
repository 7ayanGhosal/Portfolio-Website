import React, {Component} from 'react';

import Section from '../Section/Section';
import CodingProfile from '../../Components/CodingProfile/CodingProfile';
import Certification from '../../Components/Certification/Certification';

import Aux from '../../hoc/Auxiliary';
import Navbar from '../../Components/Navigation/Navbar/Navbar';
import Sidebar from '../../Components/Navigation/Sidebar/Sidebar';
import Mail from '../../Components/Mail/Mail';
import Ribbon from '../../Components/Ribbon/Ribbon'
import Animation from '../../Components/UI/Animation/Animation';
import Intro from '../../Components/Intro/Intro';
import ProfilePic from '../../Components/ProfilePic/ProfilePic';
import Focus from '../../Components/Focus/Focus';

//IMAGES
    //Coding Profiles
import CC_G from '../../Assets/Codechef/Codechef_Graph.PNG';
import CC_P from '../../Assets/Codechef/Codechef_Profile.PNG';
import CF_G from '../../Assets/Codeforces/Codeforces_Graph.PNG';
import CF_P from '../../Assets/Codeforces/Codeforces_Profile.PNG';
    //Certificates
import W_D_B from '../../Assets/Certificates/web_dev_bootcamp.PNG';
import I_Py from '../../Assets/Certificates/intro_to_python.PNG';
import DSA_Py from '../../Assets/Certificates/dsa_python.PNG';


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
    
    Certifications = [
        <Certification certificate_path={W_D_B}
            id={0}
            platform={"Udemy"}
            courseName={"The Web Developer Bootcamp"}
            duration={"6"}
            link={'https://www.udemy.com/certificate/UC-012d2764-030a-48e6-87ac-9d6400b2b3ec/'}/>,
        <Certification certificate_path={I_Py}
            id={0}
            platform={"Coding Ninjas"}
            courseName={"Introduction to Python"}
            duration={"2"}
            link={'https://ninjasfiles.s3.amazonaws.com/certificate262625e65c0d0fcdea4b7ccd0389795c2c6edf.pdf'}/>,
        <Certification certificate_path={DSA_Py}
            id={0}
            platform={"Udemy"}
            courseName={"Data Structures & Algo with Python"}
            duration={"4"}
            link={'https://ninjasfiles.s3.amazonaws.com/certificate2626244790240f88d257f2e486ee8d6e834c40.pdf'}/>
    ];

    render(){
        return(
            <Aux>
                <Navbar/>
                <Sidebar show={false}/>
                <Mail/>
                <Ribbon/>

                <Focus id="About"/>
                <Animation>
                    <ProfilePic/>
                    <Intro />
                </Animation>

                <Focus id="Certifications"/>

                <Section 
                    count={this.Certifications.length}
                    frames={this.Certifications}
                    back_color="darkred"
                    back_link="https://www.transparenttextures.com/patterns/bright-squares.png"
                />

                <Focus id="Coding-Profiles"/>

                <Section 
                    count={this.CodingProfiles.length}
                    frames={this.CodingProfiles}
                    back_color="darkblue"
                    back_link="https://www.transparenttextures.com/patterns/bright-squares.png"
                />

                
            </Aux>
    )};
}

export default Layout;