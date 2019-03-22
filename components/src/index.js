import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import faker from "faker";


const App = () => {
    return(
        <div className='ui container comments'>
           <ApprovalCard>
            <CommentDetails author='sam' timeAgo='Today at 4:50PM' text='This is the first test' imageFake={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
            <CommentDetails author='dave' timeAgo='Today at 1:00PM' text='This is the second test' imageFake={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
            <CommentDetails author='Richard' timeAgo='Yesterday at 4:50PM' text='This is the third test' imageFake={faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
            <CommentDetails author='smith'/>
           </ApprovalCard>

            
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)