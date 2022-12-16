import {useState} from "react"
import Mole from './Mole.js'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    let [aMole, setAmole] = useState(false)

    function handleWhack(e){
        props.setScore(props.score + 1)
        setAmole(false)
    }

    let showMole = aMole ? <Mole setScore={props.setScore} toggle={setAmole} handleWhack={handleWhack} /> : <EmptySlot toggle={setAmole} />
    
    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {showMole}
        </div>
    )   
}

export default MoleContainer
