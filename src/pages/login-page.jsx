import { LoginForm } from "../components/users";
import { Layout } from "../components/ui";

function LoginPage() {
    return (
        <div className="d-flex flex-column justify-content-center m-auto rounded-4" style={{width: '500px', height: '200px', backgroundColor: '#202020'}}>
            <Layout>
                <LoginForm/>
            </Layout>
        </div>
    );
}

export default LoginPage;