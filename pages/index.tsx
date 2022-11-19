import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import About from '../components/About'

export default function Home() {
  return (
    <div className="container">
      <section id='one'>
      <div className="heading">
        <h1>Hi, my name is </h1>
        <h2>Roberto Iulian Donici</h2>
      </div>
      <div className='arrow'>
        <FontAwesomeIcon icon={faArrowDown} id="arrow-down"/>
      </div>
      </section>
      <section id='two'>
        <About />
      </section>

    </div>
  )
}
