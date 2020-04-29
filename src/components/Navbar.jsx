import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default function Navbar() {
  return(
    <div className="flex items-center justify-between flex-wrap p-5 purple-700">
      <div className="flex items-center flex-shrink-0">
        <span className="font-medium text-2xl tracking-tight text-white ml-5">ANDREW CHOUGH</span>
      </div>
      <div class="float-right">
        <Link className="font-medium text-l tracking-tight text-white mr-12 hover:underline" to="/contact">CONTACT</Link>
        <button class="purple-500 text-white py-2 px-4 round-15 w-32 navbar__resume-button">RESUME</button>
      </div>
    </div>
  );
}
