import logo from './assets/ldvm-logo.png'
import Footer from './components/Footer'
import Header from './components/Header'
const App = () => {
  const handleClick = () => {
    alert('button clicked')
  }
  return (
    <>
      <Header />
      <div
        className="container"
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="content">
          React with custom webpack setup Container - {process.env.NODE_ENV}
          {process.env.name}
        </div>
        <img src={logo} alt="logo" title="logo"></img>
        <button className="btn" onClick={handleClick}>
          Button
        </button>
      </div>
      <Footer />
    </>
  )
}
export default App
