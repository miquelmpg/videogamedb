import Layout from "../layout/layout";

function Jumbotron({ children, backgroundImage }) {
    return (
        <div style={{background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${backgroundImage}) top/cover no-repeat`, height: 'auto', backgroundAttachment: 'fixed'}}>
            <Layout>
                {children}
            </Layout>
        </div>
    );
}

export default Jumbotron;