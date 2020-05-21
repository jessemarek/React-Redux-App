import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, fetchFact, changeCategory } from '../store/actions'

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
        fetchFact,
        changeCategory

    } = props

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    useEffect(() => {
        fetchFact(currentCategory === '' ? '' : `?category=${currentCategory}`)
    }, [currentCategory, fetchFact])

    return (
        <div>
            <h1>Chuck Norris Factoids</h1>
            <div className="category-btns">
                {
                    categories &&
                    categories.map((item, idx) => 
                        <CategoryButton 
                            key={idx} 
                            currentCategory={currentCategory} 
                            changeCategory={changeCategory}
                            name={item} 
                        />)
                }
            </div>
            {isFetching && <h3>Fetching Data...</h3>}
            {
                !isFetching &&
                currentFact &&
                <div>
                    <p>{currentFact}</p>
                    <button 
                        className="new-fact" 
                        onClick={() => fetchFact(currentCategory === '' ? '' : `?category=${currentCategory}`)}
                    >
                        Fetch New Fact
                    </button>
                </div>
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

export default connect(
    mapStateToProps,
    { fetchCategories, fetchFact, changeCategory })
    (Factoids)