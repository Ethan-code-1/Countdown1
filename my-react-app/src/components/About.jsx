import '../styles/About.css'

const About = () => {
    return (
        <>
            <h1 style={{letterSpacing: '3px', paddingLeft: '20px', textShadow: 'none'}}>About Me:</h1>
            <hr /> 

            <div className="container">
                <h2>My name is Ethan</h2>
                <h4>Here is some information about me:</h4>
                <ul>
                    <li>Hometown: Charlottesville, VA</li>
                    <li>School: University of Virginia</li>
                    <li>Some Interests of mine include:</li>
                    <ul>
                        <li>Traveling</li>
                        <li>Skiing</li>
                        <li>Investing</li>
                    </ul>
                    <br />

                    <p>
                        I am currently in the launch program which you can learn about by clicking <a href="https://joinforge.co/launch" target="_blank">here</a>. Below is a picture of my University: 
                    </p>

                    <img id="uvaImage" src="https://media.istockphoto.com/id/988782816/photo/the-rotunda-at-the-university-of-virginia-at-dusk-with-thomas-jefferson-statue-in-the.jpg?s=612x612&w=0&k=20&c=MmuzA3P1wQVIxj5CEL--UQhmbrG3rJygZJUUsY-5zLw=" alt="University of Virginia" />
                </ul>
            </div>
            <div id="lower-div"></div>
        </>
    );
}

export default About;
