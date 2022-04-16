import React from 'react';
import WheelComponent from '../../react-wheel-of-prizes'



function wheel() {
    const segments = [
        'MASS DTS',
        'DISRUPTOR DROP',
        'CANNON RUSH',
        'PROXY HATCH',
        'HIDDEN BASES ONLY',
        'BONGCLOUD',
        'MASS CONTAMINATE',
        'PLANETARY RUSH',
        'MASS RAVENS',
        '1 BASE NYDUS RUSH',
        'MOTHERSHIP RUSH',
        'PROXY EVERYTHING',
        'THE BUILD',
        'REAPERS ONLY',
        'MASS BANELINGS'
      ]
      const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000',
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000',
        '#EC3F3F',
        '#FF9000'
      ]
      const onFinished = (winner) => {
        console.log(winner)
      }
    
  return (
    <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment='won 10'
        onFinished={(winner) => onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonTest='Spin'
        isOnlyOnce={false}
        size={290}
        upDuration={100}
        downDuration={200}
        fontFamily='Arial'
    />
  );
  
}

export default wheel;