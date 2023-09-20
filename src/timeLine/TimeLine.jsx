import React from 'react';
import Histories from '../histories/Histories';
import Publication from './Publication';
import "./publication.css";
import "./timeline.css";

function TimeLine(props) {
    return (
        <div className='timeLine'>
            <Histories/>
            <div className="timeLine_Publications">
                <Publication url={"../src/assets/perfiles/girl.jpg"} username={"Jefferson"} days={2} description={"I need to get some sleep"} likes={1233}/>
                <Publication url={"../src/assets/perfiles/girl.jpg"} username={"Carlos"} days={6} description={"Tool fire, Tilin insane • Chakalitos"} likes={5443}/>
                {/* <Publication url={"../src/assets/perfiles/girl.jpg"} username={} days={} description={} likes={}/>
                <Publication url={"../src/assets/perfiles/girl.jpg"} username={} days={} description={} likes={}/> */}
            </div>
        </div>
    );
}

export default TimeLine;