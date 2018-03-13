import React from 'react'

const Fave = props => {

  const isFave = (props.isFave) ? 'remove_from_queue' : 'add_to_queue'

  let handleClick = (e) => {
    e.stopPropagation()
    props.onClick()
  }

  return (
    <div className={'film-row-fave ' + isFave}  onClick={ handleClick }>
      <p className="material-icons">{isFave}</p>
    </div>
  )
}

export default Fave;
