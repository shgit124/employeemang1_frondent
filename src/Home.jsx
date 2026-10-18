import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold text-success fs-3" to="/">
            <i className="bi bi-people-fill me-2"></i>
            PeopleDesk
          </Link>

          <div className="ms-auto d-flex align-items-center gap-3">
            <Link to="/" className="text-decoration-none text-secondary">
              Home
            </Link>

            <a href="#features" className="text-decoration-none text-secondary">
              Features
            </a>

            <Link to="/login" className="btn btn-outline-success px-4">
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="container-fluid py-5"
        style={{ backgroundColor: '#f0faf4', minHeight: '75vh' }}
      >
        <div className="container">
          <div className="row align-items-center g-5 py-4">

            {/* Left Side Details */}
            <div className="col-lg-6">
              <span
                className="badge rounded-pill px-3 py-2 mb-3"
                style={{ backgroundColor: '#dcfce7', color: '#15803d' }}
              >
                SMART EMPLOYEE MANAGEMENT
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Manage Your Team,
                <span className="text-success"> Effortlessly.</span>
              </h1>

              <p className="text-secondary fs-5 lh-lg">
                Simplify employee management with one powerful platform.
                Organize employee records, manage departments, and access
                your team information easily in one place.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/addemp" className="btn btn-success btn-lg px-4">
                  Get Started
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <a href="#features" className="btn btn-outline-success btn-lg px-4">
                  Explore Features
                </a>
              </div>

              {/* Highlights */}
              <div className="row mt-5 g-3">
                <div className="col-4">
                  <h4 className="fw-bold text-success">Easy</h4>
                  <small className="text-secondary">Employee Records</small>
                </div>

                <div className="col-4">
                  <h4 className="fw-bold text-success">Smart</h4>
                  <small className="text-secondary">Team Management</small>
                </div>

                <div className="col-4">
                  <h4 className="fw-bold text-success">Fast</h4>
                  <small className="text-secondary">Data Access</small>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="col-lg-6 text-center">
              <img
                src="https://img.magnific.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Employee management illustration"
                className="img-fluid"
                style={{ maxHeight: '430px' }}
              />

              <div className="bg-white shadow-sm rounded-4 p-3 mt-3 d-inline-flex align-items-center gap-3">
                <i className="bi bi-people-fill fs-2 text-success"></i>
                <div className="text-start">
                  <h6 className="fw-bold mb-1">Employee Management</h6>
                  <small className="text-secondary">
                    Manage your team easily
                  </small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5" id="features">
        <div className="text-center mb-5">
          <span className="text-success fw-bold small">OUR FEATURES</span>
          <h2 className="fw-bold mt-2">Everything Your Team Needs</h2>
          <p className="text-secondary">
            Simple tools to manage your employees efficiently.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
              <div className="card-body">
                <i className="bi bi-person-vcard fs-1 text-success"></i>
                <h5 className="fw-bold mt-3">Employee Records</h5>
                <p className="text-secondary">
                  Add, view, and maintain employee information easily.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
              <div className="card-body">
                <i className="bi bi-diagram-3 fs-1 text-success"></i>
                <h5 className="fw-bold mt-3">Department Tracking</h5>
                <p className="text-secondary">
                  Organize employees according to their departments.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
              <div className="card-body">
                <i className="bi bi-graph-up-arrow fs-1 text-success"></i>
                <h5 className="fw-bold mt-3">Quick Management</h5>
                <p className="text-secondary">
                  Access employee details and manage records quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 border-top bg-light">
        <p className="text-secondary mb-0">
          © 2026 PeopleDesk | Employee Management System
        </p>
      </footer>
    </>
  )
}

export default Home