import React from 'react'

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english'};
    
    onLanguageChanage = language => {
        this.setState({ language});
    }

    render() {
        return(
            <Context.Provider value={{...this.state, onlanguagechange: this.onlanguagechange}}>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export default Context;