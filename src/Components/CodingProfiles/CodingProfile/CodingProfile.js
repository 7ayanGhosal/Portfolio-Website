import React , {Component} from 'react';
import classes from './CodingProfile.css';
import Aux from '../../../hoc/Auxiliary'
import Image from './Image/Image';
import Details from './Details/Details';

class CodingProfile extends Component{
    render(){
        return(
            <Aux>
                <div className={classes.CodingProfile}>
                    <div>
                        <Details platform={this.props.platform}
                                handel={this.props.handel}
                                rank={this.props.rank}
                                max_rating={this.props.max_rating}
                                link={this.props.link}/>

                    </div>
                    <div className={classes.Images}>
                        <Image path={this.props.profile_path}>
                            Profile Details
                        </Image>
                        <Image path={this.props.graph_path}>
                            Contest Graph
                        </Image>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default CodingProfile;