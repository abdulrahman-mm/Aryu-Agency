import CreativeDesign_Hero from '../components/creative design components/CreativeDesign_Hero'
import CreativeDesign_Main from '../components/creative design components/CreativeDesign_Main'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CreativeDesign = () => {

  
  return (
    <div className='overflow-hidden'>
          <Header/>
          <CreativeDesign_Hero/>
          <CreativeDesign_Main/>
          <Footer/>
          
    </div>
  )
}

export default CreativeDesign