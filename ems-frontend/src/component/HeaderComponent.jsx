import React from 'react';

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar custom-navbar">
        <div className="container-fluid d-flex align-items-center justify-content-start">
          {/* Abstract E icon */}
          <span className="e-icon me-2" aria-label="E Icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect x="4" y="4" width="28" height="28" rx="8" fill="#000000ff"/>
              <rect x="10" y="10" width="16" height="3" rx="1.5" fill="#fff"/>
              <rect x="10" y="16.5" width="12" height="3" rx="1.5" fill="#fff"/>
              <rect x="10" y="23" width="16" height="3" rx="1.5" fill="#fff"/>
            </svg>
          </span>
          <a href="/" className="navbar-brand custom-navbar-brand">
            EmployeeOpsX
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;