import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState('');

    return (
        <div className='h-[900 px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-6xl text-center'>Log in</h2>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email")} placeholder="First name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password")} placeholder="First name" className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget Password</span></label>
                    </div>
                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                </form>
                <p>New to React Tutorial <Link className='text-secondary' to="/logout">Create a new account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full text-secondary'>Email & password login</button>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full text-accent'>Google login</button>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full text-primary'>Github log in</button>

            </div>
        </div>
    );
};

export default Login;