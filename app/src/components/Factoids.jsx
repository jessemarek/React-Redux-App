import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, fetchFact } from '../store/actions'

//Components
import CategoryButton from './CategoryButton'

const Factoids = props => {

    const {
        isFetching,
        currentFact,
        categories,
        currentCategory,
        errors,
        fetchCategories,
        fetchFact

    } = props

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    useEffect(() => {
        fetchFact(currentCategory === '' ? 'random' : `random?category=${currentCategory}`)
    }, [currentCategory, fetchFact])

    return (
        <div>
            <h1>Chuck Norris Factoids</h1>
            {
               !isFetching && 
               categories && 
               categories.map((item, idx) => <CategoryButton key={idx} name={item} />)
            }
            {isFetching && <h3>Fetching Data...</h3>}
            {
                !isFetching &&
                currentFact &&
                <p>{currentFact}</p>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.factReducer.isFetching,
        currentFact: state.factReducer.currentFact,
        categories: state.factReducer.categories,
        currentCategory: state.factReducer.currentCategory
    }

}

export default connect(mapStateToProps, { fetchCategories, fetchFact })(Factoids)