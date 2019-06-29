import React from 'react'
import PropTypes from 'prop-types'


const RepoItems = ({ repo }) => {
    return (
        <div className='card'>
            <h3>
                <a href={repo.html_url}> {repo.name}</a>
            </h3>
        </div>
    )
}

// eslint-disable-next-line react/no-typos
RepoItems.PropTypes = { repo: PropTypes.array.isRequired,}


export default RepoItems
