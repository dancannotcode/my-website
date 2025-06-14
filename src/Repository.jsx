import './App.css';

function Repository(props) {
    return(
        <>
            <div className = "project-card">
                    <div className="card-header">
                        <a href={props.url} target='_blank'>
                            <h1><u>{props.title}</u></h1>
                        </a>
                        <h3>{props.date}</h3>
                        
                    </div>
                    <div className="details">
                            <span className = "description"> 
                                {props.description}
                            </span>  
                    </div>
                </div>
        </>
    );
}

export default Repository;    