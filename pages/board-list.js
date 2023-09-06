import React from 'react';

const BoardList = ({data}) =>  {

    console.log(">>>>"+JSON.stringify(data));

    return (
        <>
            <h1>Board List는 SSR 방식의 마이크로 프론트엔드</h1>
            <div>id: {data.title}</div>
        </>
    )
}

// BoardList.getInitialProps = async () => {
//     const res  = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data = await res.json();
//     // const data = {
//     //     "userId": 1,
//     //     "id": 1,
//     //     "title": "delectus aut autem",
//     //     "completed": false
//     // }
//     return {
//         data
//     }
// }

export const getServerSideProps = async (context) => {
    let props = {};
    // try{
    //     fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
    //         console.log("데이터를 잘 가져 오나요?");
    //         if(!res.ok) {
    //             throw new Error('Failed to fetch data');
    //         }
    //         data = response.data;
    //     });
        
        

    console.log("서버에서 실행 되나요?");
        const data = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        }
        return {
            props: {
                data : {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
                }
            }
        }
    // } catch (err) {
    //     console.log(err);
    //     throw err;
    // }
}

export default BoardList;
