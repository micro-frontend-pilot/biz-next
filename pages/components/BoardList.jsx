import React from 'react';
// import Layout from './layout';

class BoardList extends React.Component {
    // static async getInitialProps ({req}) {
    //     return req ? {from: 'server'} : { from: 'client'}
    // }

    render() {
        return(
            <div>
                {this.props.from} 에서 실행이 되었어요~!
            </div>
        )
    }
}

export default BoardList;
