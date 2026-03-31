import profilePic from './assets/ChatGPT Image Jan 11, 2026, 02_18_24 PM.png'

function Card(){
    return(
        <div className="card">
            <img className="img" src={profilePic} alt="Wallprint"></img>
            <h2 className="heading">Wallprint</h2>
            <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus animi quam excepturi esse quos molestias dolore, velit laudantium minus vel voluptatibus nobis aliquam debitis sapiente blanditiis earum inventore officia?</p>
        </div>
    );
}

export default Card;