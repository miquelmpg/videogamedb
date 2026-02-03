import error404 from '../src/assets/images/error404.gif';

function Error404Page() {
    return (
        <div style={{width: '100vw',
                    height: `calc(100vh - 70px)`,
                    overflow: 'hidden',
                    backgroundImage: `url(${error404})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
        ></div>
    );
}

export default Error404Page;