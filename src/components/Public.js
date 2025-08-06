import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Sunny Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Patia,Bhubaneswar, Sunny Repairs provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Sunny Repairs<br />
                    Patia<br />
                    Bhubaneswar, Odisha 751024<br />
                    <a href="tel:919772223457">(+91) 9876543219</a>
                </address>
                <br />
                <p>Owner: Sunny D</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public