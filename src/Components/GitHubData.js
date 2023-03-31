import { useState, useEffect } from "react";
import GithubPic from '../Images/GithubSymbol.png';

export default function GitHubData(){
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
    fetch('https://api.github.com/users/Filip-Mossberg/repos')
    .then(response => response.json())
    .then(
        (result) => {
        setLoading(true);
        setData(result);
        console.log(result);
    },
        (error) =>{
        setError(error);
        setLoading(true); 
        }
    )
}, [])
if(error){
    return <div> <h1>Error Loding Content!</h1></div>
}
else if(!loading){
    return <div> <h1>Content is loading...</h1></div>
}
else{
    const dataId = data.map(element => element.id);
    console.log(dataId);
    return(
        <main>
            {data.filter(element => element.id === dataId[5] || element.id === dataId[2] || element.id === dataId[7] || element.id === dataId[11]).map(filteredElement => {
                console.log(filteredElement.name)
                return(
                    <div key={filteredElement.id} className="container">
                        <div className="image">
                            <img src={GithubPic} />
                        </div>
                        {console.log(filteredElement.id)}
                        <input type="checkbox" id={"B" + filteredElement.id} />
                        {console.log("B" + filteredElement.id)}
                        <h2>{filteredElement.name}</h2>
                        <p>{filteredElement.description}</p>
                        <div className={"ReadMore" + filteredElement.id}>
                            <p><a className="GithubLink" href={filteredElement.html_url} target="_blank"><span className="link">Link</span></a></p>
                            <br />
                        </div>
                        <label htmlFor={"B" + filteredElement.id}>Show more</label>
                    </div>
                )
            })
}
</main>
    )
}
}

