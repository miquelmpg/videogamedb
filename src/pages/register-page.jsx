import { RegisterForm } from "../components/users";
import { Layout } from "../components/ui";

function RegisterPage() {
    return (
        <div className="d-flex flex-column justify-content-center mx-auto rounded-4" style={{width: '500px', height: '250px', backgroundColor: '#202020'}}>
            <Layout>
                <RegisterForm/>
            </Layout>
        </div>
    );
}

export default RegisterPage;