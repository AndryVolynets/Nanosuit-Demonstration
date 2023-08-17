import React from 'react'
import { CryButtonSearch } from '../buttons'
import ReactAudioPlayer from 'react-audio-player'
import { CalloutBasic } from '../surfaces/callout'

const Header = () => {
    return (
        <header>
            <nav
                className="navbar navbar-expand-lg"
                style={{ backgroundColor: 'transparent' }}>
                <div className="container">
                    <a
                        className="navbar-brand"
                        href="#"
                        style={{ color: '#a2dfc2' }}>
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                    style={{ color: '#a2dfc2' }}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    style={{ color: '#a2dfc2' }}
                                    href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    style={{ color: '#a2dfc2' }}
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                    style={{ color: '#a2dfc2' }}>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#"
                                    style={{ color: '#a2dfc2' }}
                                    tabIndex={-1}
                                    aria-disabled="true">
                                    Disabled
                                </a>
                            </li>
                            <li className="nav-item"></li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <CryButtonSearch />
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
