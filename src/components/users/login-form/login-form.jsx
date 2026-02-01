import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import * as AuthService from "../../../services/auth-service";
import { useAuth } from "../../../contexts";

function LoginForm() {
    const { register, handleSubmit, setError, reset, formState: { errors, isValid } } = useForm({ mode: 'all' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleUserLogin = async (user) => {
        try {
            user = await AuthService.login(user);
            reset();
            login(user);
            navigate('/');
        } catch (error) {
            const { status } = error;
            if (status === 401) {
                const { errors, message } = error.response?.data || {};
                console.error(message);
                Object.keys(errors)
                .forEach((inputName) => {
                    setError(inputName, { type: 'custom', message: errors[inputName] })
                })
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(handleUserLogin)}>

        {/* EMAIL */}
        <div className="input-group mb-1">
            <span className="input-group-text"><i className="fa fa-envelope fa-fw"></i></span>
            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="user@example.org" {...register('email', { required: 'User email is required' })} />
            {errors.email && (<div className="invalid-feedback">{errors.email.message}</div>)}
        </div>

        {/* PASSWORD */}
        <div className="input-group mb-1">
            <span className="input-group-text"><i className="fa fa-lock fa-fw"></i></span>
            <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="*****" {...register('password', { required: 'User password is required' })} />
            {errors.password && (<div className="invalid-feedback">{errors.password.message}</div>)}
        </div>

        <div className="d-grid gap-2 mt-2">
            <button className='btn btn-primary' type='submit' disabled={!isValid}>Login</button>
            <hr className='m-0' />
            <Link className='btn btn-secondary' type='button' to="/register">Register</Link>
        </div>
        </form>
    )
    }

export default LoginForm;