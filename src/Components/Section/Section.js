import React , {Component} from 'react';
import classes from './Section.css';
import LeftArrow from '../LeftArrow/LeftArrow'
import RightArrow from '../RightArrow/RightArrow'



import CodingProfile from './CodingProfile/CodingProfile';
// IMPORT THE IMAGES HERE PASS THE PATH TO THE SUBCOMPONENT
import CC_G from '../../Assets/Codechef/Codechef_Graph.PNG';
import CC_P from '../../Assets/Codechef/Codechef_Profile.PNG';

import CF_G from '../../Assets/Codeforces/Codeforces_Graph.PNG';
import CF_P from '../../Assets/Codeforces/Codeforces_Profile.PNG';

class Section extends Component{
    state = {
        frame:[<CodingProfile graph_path={CF_G} profile_path={CF_P}
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
                    link={'https://www.codechef.com/users/mastermindayan'}/>,
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
                    link={'https://www.codechef.com/users/mastermindayan'}/>],
        index: 0,
        count: this.props.count
    }

    leftHandler = ()=>{
        if (this.state.index != 0)
        {
            this.setState((prev)=>({index: prev.index-1}))
        }
    }

    rightHandler = ()=>{
        if (this.state.index != this.state.count-1)
        {
            this.setState((prev)=>({index: prev.index+1}))
        }
    }

    render(){
        // console.log(this.state.count)
        let leftFade = '';
        let rightFade = '';
        if(this.state.index == 0){
            leftFade = classes.Fade;
        }
        if(this.state.index == this.state.count-1){
            rightFade = classes.Fade;
        }

        return(
            <div id={this.props.id} className={classes.Section}>
                
                <LeftArrow class={classes.arrow_left+" "+leftFade} handler={this.leftHandler}/>
                <RightArrow class={classes.arrow_right+" "+rightFade} handler={this.rightHandler}/>
                
                {this.state.frame[this.state.index]}
            </div>
        )
    }
}

export default Section;