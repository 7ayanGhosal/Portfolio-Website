import React , {Component} from 'react';
import classes from './Project.css';
import Aux from '../../hoc/Auxiliary';
import IFrame from './iFrame/iFrame';
import Details from './Details/Details';
import Description from './Description/Description';

class Project extends Component{
    render(){
        return(
                <Aux>
                    <Details name={this.props.name}/>
                    <div className={classes.Project} id={this.props.id}>
                        <Description>{this.props.description}</Description>
                        <IFrame link={this.props.link}>
                            Open Project <i class="far fa-hand-point-right"></i>
                        </IFrame>
                    </div>
                </Aux>
        )
    }
}

export default Project;