import React , {Component} from 'react';
import classes from './Certification.css';
import Image from './Image/Image';
import Details from './Details/Details';

class Certification extends Component{
    render(){
        return(
                <div className={classes.Certification} id={this.props.id}>
                    
                    <Details platform={this.props.platform}
                            courseName={this.props.courseName}
                            duration={this.props.duration}
                            link={this.props.link}/>

                    <div className={classes.Images}>
                        <Image path={this.props.certificate_path}>
                            Certificate
                        </Image>
                    </div>
                    
                </div>
        )
    }
}

export default Certification;