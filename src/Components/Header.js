import React from 'react';

function Header() {
    return (

        <header className="lg:py-20 py-6 items-center bg-blue-500 text-white text-center">

            <h2 className="tracking-tight leading-10 font-extrabold text-white lg:text-5xl text-3xl mb-5 align-middle">
                Random Questions
            </h2>

            <p className="text-white mx-10 text-base">
                Get a random question, record your answer. <br></br>
                Built for practicing your speaking skill and for fun. Enjoy!
            </p>

        </header>

    )
}

export default Header;