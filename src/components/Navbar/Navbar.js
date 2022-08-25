import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="fullNavbar container flex justify-between mx-auto">
            <div className="logo w-44"><img src="https://i.ibb.co/CwTPQfx/Netflix-Logo.png" alt="" /></div>
            <div className="Button my-auto btn bg-red-600 text-white">Sing in</div>
            </div>
        </div>
    );
};

export default Navbar;