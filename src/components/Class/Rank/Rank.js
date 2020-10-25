import React from 'react';
import './Rank.css';

const Rank = (props) => {
    const { studentList } = props;
    const newStudentList = [...studentList];
    let studentListSorted = newStudentList.sort(
        (a,b) => b["score"]-a["score"]
    );
    const rankSorted = [...new Set(studentListSorted.map(element => 
        element.score
    ))];
    console.log(rankSorted);
    let i = 1;
    rankSorted.forEach( r => {
        
        studentListSorted.forEach( x => {
            if (x.score === r) {
                x["rank"] = i;
            }
        })
        i++;
        
        }
    );
    studentListSorted = studentListSorted.filter(st => 
        st.rank < 4);
    let studentListRank = studentListSorted.map( (st, index) => {
        return (
            <tr key={index}>
                <td className="td-rank">{st.rank}등</td>
                <td>{st.name}</td>
                <td className="td-score">{st.score}</td>
            </tr>
        );
    });
    
    console.log(studentListSorted);

    return (
        <div className="rank">
            <h3>랭킹</h3>
            <table>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {studentListRank}
                </tbody>
                
                
            </table>
        </div>
    )
};

export default Rank;