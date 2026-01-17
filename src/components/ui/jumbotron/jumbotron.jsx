function Jumbotron({ children, backgroundImage }) {
    return (
        <div style={{background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${backgroundImage}) top/cover no-repeat`, height: 'auto'}}>{children}</div>
    );
}

export default Jumbotron;