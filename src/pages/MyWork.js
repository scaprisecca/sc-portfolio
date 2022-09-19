
const MyWork = (props) => {
    return ( 
        <main className="myWork">
            <h2>My Work</h2>
            <p>This is some of my work</p>

            <div className="projectsContainer">
                {props.map((project) => (
                    <div className="card">
                        <img src={props.image} alt={props.name} className="cardImage" />
                        <h3 className="cardTitle">{props.name}</h3>
                        <p className="cardDescription">{props.description}</p>
                    </div>
                ))}
            </div>
        </main>
     );
}
 
export default MyWork;