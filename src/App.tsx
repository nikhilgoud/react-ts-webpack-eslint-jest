import logo from './assets/ldvm-logo.png'
import Footer from './components/Footer'
import Header from './components/Header'
const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          React with custom webpack setup Container - {process.env.NODE_ENV}{' '}
          {process.env.name}
        </div>
        <img src={logo} alt="logo"></img>
      </div>
      <Footer />
    </>
  )
}
export default App
