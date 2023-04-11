import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const BasicLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="pt-8">{children}</main>
            <Footer />
        </>
    )
}

export default BasicLayout