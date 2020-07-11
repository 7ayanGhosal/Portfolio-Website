import React , {Component} from 'react';
import classes from './Certification.css';
import Aux from '../../hoc/Auxiliary';
import Image from './Certificate/Certificate';
import Details from './Details/Details';
import Description from './Description/Description';

class Certification extends Component{
    render(){
        return(
                <Aux>
                    <Details platform={this.props.platform}
                            courseName={this.props.courseName}
                            duration={this.props.duration}/>
                    <div className={classes.Certification} id={this.props.id}>
                        <Description>{this.props.description}</Description>
                        <Image path={this.props.certificate_path} link={this.props.link}>
                            Link to Certificate <i class="far fa-hand-point-right"></i>
                        </Image>
                    </div>
                </Aux>
        )
    }
}

export default Certification;