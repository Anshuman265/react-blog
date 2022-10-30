const Home = () => {
    const handleClick = () => {
        console.log('hello,ninjas');
    }
    const handleClickAgain = (name , e) => {
        console.log('hello ' + name , e.target);
    }
// We automatically get access to the event parameter
    return ( 
        <div className="home">
            <h2> Research Blog </h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Zelda' , e )}>Click me again</button>
        </div>
     );
}
 
export default Home;