


'use client';
import React from 'react';
import Link from 'next/link';


export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-4">
      <div className="container">
        
        <div className="d-flex align-items-center">
          <Link className="navbar-brand me-4 ml-12" href="/">OhO</Link>
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">Series</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">Kids</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
