function Layout({ children }) {
    return (
        <div className="container d-flex flex-column gap-5">{children}</div>
    );
}

export default Layout;