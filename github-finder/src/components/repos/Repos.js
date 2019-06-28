import React from 'react'
import RepoItems from './RepoItems'
import PropTypes from 'prop-types'


const Repos = ({ repos }) => {
    return repos.map(repo => <RepoItems repo={repo} key={repo.id} />)
}

Repos.PropTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos
