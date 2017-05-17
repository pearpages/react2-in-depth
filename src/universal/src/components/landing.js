import React from 'react';
import { Link } from 'react-router';
import Filter from './filter';
import { connect } from 'react-redux'
import {setLandingSearchTerm} from '../redux/actionCreators'
import { searchMovies } from '../data/movies';
const { string } = React.PropTypes

class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }

    handleSearchTermChange(event) {
        this.props.dispatch(setLandingSearchTerm(event.target.value));
    }

    render() {
        const props = this.props;
        return (
            <div className="landing">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero repudiandae dignissimos, eaque tenetur quasi doloribus autem nisi cum magnam ut hic illo in illum aliquid, ea excepturi minima placeat, molestias nobis facilis obcaecati aliquam. Suscipit distinctio praesentium recusandae illo reiciendis, asperiores molestias aspernatur ipsum ipsa optio vero perspiciatis nulla dicta aut atque ad. Autem quidem accusantium facilis molestiae quam error, similique? Consectetur inventore praesentium quas quam quisquam tempore nisi quis aspernatur quos natus eligendi, ut pariatur provident sunt commodi molestias perferendis aut eius sit excepturi quaerat in temporibus veniam. Laborum deleniti ad mollitia ullam tenetur sint nam exercitationem consequuntur alias.</div>

                <Filter
                    onChange={this.handleSearchTermChange}
                    searchTerm={props.landingSearchTerm}
                    movies={searchMovies(props.landingSearchTerm)}
                    label="Search"
                />
                <Link to='/search' className="button">or Browse All</Link>
            </div>
        );
    }

}

Landing.propTypes = {
    landingSearchTerm: string
}

function mapStateToProps(state) {
    return {
        landingSearchTerm: state.landingSearchTerm
    }
}

export default connect(mapStateToProps)(Landing);