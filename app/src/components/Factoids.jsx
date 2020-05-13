import React from 'react'
import { connect } from 'react-redux'

const Factoids = props => {

    return (
        <div>
            <h1>Chuck Norris Factoids</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        currentFact: state.currentFact,
        categories: state.categories
    }

}

export default connect(mapStateToProps, {})(Factoids)