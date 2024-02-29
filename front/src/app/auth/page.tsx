'use client'
import LoginForm from '@/components/forms/login-form'
import RegisterForm from '@/components/forms/register-form'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const AuthPage = () => {
    const [showLogin, setShowLogin] = useState(true)
    if (showLogin) {
        return (
            <section className="flex justify-center items-center h-screen" style={{
                backgroundImage: `url('/demo1-background.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="flex rounded-3xl bg-white">
                    <div className="w-96 h-96 bg-white flex items-center flex-col pt-12 gap-3 rounded-l-3xl">
                        <h2 className="text-2xl font-bold text-teal-900">Hola de vuelta!</h2>
                        <LoginForm />
                    </div>
                    <div className="w-96 h-96 rounded-3xl bg-[#207755]">
                        <div className="h-72 flex items-center flex-col justify-center gap-3">
                            <h2 className="text-2xl font-bold text-[#f3d87e]">
                                Bienvenido a MITI!
                            </h2>
                            <div>
                                <p className="inline font-semibol text-white">
                                    ¿No tenes cuenta?{" "}
                                </p>
                            </div>
                            <div>
                                <Button
                                    asChild
                                    className="h-8  rounded-full  px-8 bg-green-500 hover:bg-green-600 shadow-md  hover:shadow-black-400 "
                                    type="submit"
                                >
                                    <p onClick={() => setShowLogin(!showLogin)} className='cursor-pointer'> Registrarse</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="flex justify-center items-center h-screen" style={{
                backgroundImage: `url('/demo1-background.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="flex rounded-3xl bg-white">
                    <div className="w-96 h-96 bg-white flex items-center flex-col pt-12 gap-3 rounded-l-3xl">
                        <h2 className="text-2xl font-bold text-teal-900">Crea tu cuenta de usuario</h2>
                        <RegisterForm />
                    </div>
                    <div className="w-96 h-96 rounded-3xl bg-[#207755]">
                        <div className="h-72 flex items-center flex-col justify-center gap-3">
                            <h2 className="text-2xl font-bold text-[#f3d87e]">
                                Bienvenido a MITI!
                            </h2>
                            <div>
                                <p className="inline font-semibol text-white">
                                    ¿Ya tienes cuenta?{" "}
                                </p>
                            </div>
                            <div>
                                <Button
                                    asChild
                                    className="h-8  rounded-full  px-8 bg-green-500 hover:bg-green-600 shadow-md  hover:shadow-black-400 "
                                    type="submit"
                                >
                                    <p onClick={() => setShowLogin(!showLogin)} className='cursor-pointer'> Iniciar Sesión</p>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default AuthPage