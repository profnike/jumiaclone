import { useTransition, animated,config } from 'react-spring'
import '../Toggleanim/Toggleanim.css'
import Zoom from 'react-reveal/Zoom';
import {useState} from 'react'
function Toggle() {
    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: toggle,
      delay: 800,
      
      config: config.molasses,
      onRest: () => set(!toggle),
    })
    return transitions(({ opacity }, item) =>
      item ? (
        <animated.div
          style={{
            position: 'absolute',
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          }}>
       
         
            <h3 className='every-in-toggles' >EVERYTHING MUST GO! </h3>
           
         
        </animated.div>
      ) : (
        <animated.div
          style={{
            position: 'absolute',
            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
          }}>
             
             
            <h3>Upto 80% off</h3>
            <h4>1st to 3rd April</h4>
           
        
        </animated.div>
      )
    )
  }
  export default Toggle