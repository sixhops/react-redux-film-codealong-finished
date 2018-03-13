import React, { Component } from 'react';
import FilmRow from './FilmRow';
import { toggleFave } from '../actions/index';
import { clickDetails } from '../actions/index';


import { connect } from 'react-redux';
// Links prop functions to action dispatchers
const mapDispatchToProps = dispatch => {
  return {
    toggleFave: film => dispatch(toggleFave(film)),
    clickDetails: film => dispatch(clickDetails(film))
  }
}
// Sends redux state to components via props
const mapStateToProps = state => {
  return {
    films: state.films,
    faves: state.faves
  }
}

class ConnectedFilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "all",
    }
  }

  handleFilterClick = (filter) => {
    this.setState({
      filter: filter
    })
    console.log("setting filter to: " + filter);
  }

  render() {

    const { faves, films } = this.props

    var allFilter = (this.state.filter === 'all' ? 'is-active' : '')
    var favesFilter = (this.state.filter === 'faves' ? 'is-active' : '')

    if (this.state.filter === 'all') {
      var filmsToShow = films
    } else {
      var filmsToShow = faves
    }

    let allFilms = filmsToShow.map( (film, index) => {
      return(
        <FilmRow onFaveToggle={(e) => this.props.toggleFave(film)}
          onDetailsClick={(e) => this.props.clickDetails(film)}
          title={film.title}
          date={film.release_date}
          key={film.id}
          url={film.poster_path}
          isFave={ faves.includes(film) } />
      )
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">

          <div className={'film-list-filter ' + allFilter}  onClick={() => this.handleFilterClick('all')}>
            <span>ALL</span>
            <span className="section-count">{films.length}</span>
          </div>

          <div className={'film-list-filter ' + favesFilter} onClick={() => this.handleFilterClick('faves')}>
            <span>FAVES</span>
            <span className="section-count">{faves.length}</span>
          </div>

        </div>
        {allFilms}
      </div>
    );
  }
}

const FilmListing = connect(mapStateToProps, mapDispatchToProps)(ConnectedFilmListing)

export default FilmListing;
