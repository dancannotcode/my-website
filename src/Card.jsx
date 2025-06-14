import './App.css';

function Card(props) {
    return(
        <a href= {props.url} target='_blank'>
            <div class = "pinnedCard">
                    <div class="cardHeader">
                        <div class="cardTitle">
                            <span class = "title">
                                <b>{props.title}</b>
                            </span> 
                        </div>
                    </div>

                    <img id='cardImage'
                    src={props.image} 
                    alt='This shows the project'/>

                    <span class="cardDetail">
                            {props.detail}
                    </span>
             </div>
        </a>
    );
}

export default Card;    