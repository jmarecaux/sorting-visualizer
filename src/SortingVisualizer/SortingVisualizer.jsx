import React from 'react';
import getShuffleArrayAnimations from '../SortingAlgorithms/shuffle';
import getMergeSortAnimations from '../SortingAlgorithms/mergeSort';
import getQuickSortAnimations from '../SortingAlgorithms/quickSort';
import getBubbleSortAnimations from '../SortingAlgorithms/bubbleSort';
import getHeapSortArrayAnimations from '../SortingAlgorithms/heapSort';
import getInsertionSortAnimations from '../SortingAlgorithms/insertSort';
import getSelectionSortAnimations from '../SortingAlgorithms/selectSort';

import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [],
            numBars: 50,
            animationSpeed: 5,
        };
    }

    componentDidMount() {
        this.resetArray(this.state.numBars);
        document.body.style.backgroundColor = "rgb(50,50,50)"
    }

    handleOnChange = (e) => {
        this.setState({numBars: e.target.value,
                       animationSpeed: 750/e.target.value-.5});
        this.resetArray(this.state.numBars-1);
    }

    resetArray(NUMBER_OF_ARRAY_BARS) {
        const array = [];
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5,500));
        }
        this.setState({array});
    }
    
    animate(animations) {
        for(let i=0; i < animations.length; i++) {
            const [one, two, version] = animations[i];
            console.log(animations[i]);
            setTimeout(() => {
                if(version==='c' || version==='r') {
                    this.changeColor(one, two, version);
                } else {
                    this.changeBars(one,two);
                }}, i*this.state.animationSpeed);
        }
    }

    
    changeColor(one, two, version) {
        const arrayBars = document.getElementsByClassName('array-bar');
        let barOneStyle;
        let barTwoStyle;
        if(one>=0)
            barOneStyle = arrayBars[one].style;
        if(two>=0)
            barTwoStyle = arrayBars[two].style;
        const color = version ==='r' ? 'rgb(220,220,220)' : 'rgb(80,130,225)';
        if(barOneStyle)
            barOneStyle.backgroundColor = color;
        if(barTwoStyle)
            barTwoStyle.backgroundColor = color;
    }
    
    changeBars(one, two) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const barStyle = arrayBars[one].style;
        barStyle.height = `${two}px`;
    }
    
    render() {
        
        const {array} = this.state;
        return (
            <div className="top-container">
            <div className="slidecontainer">
                <input type="range" min={5} max={750} value={this.state.numBars} className="slider" onChange={this.handleOnChange}/>
            </div>
            <div className="header-container">
                <div className="button-container">
                <button
                    onClick={() => this.resetArray(this.state.numBars)}
                    className="reset-button"
                >
                <span>
                    RESET
                </span>
                </button>
                </div>
                <button
                    onClick={() =>{ const animations = getShuffleArrayAnimations(this.state.array); this.animate(animations);}}
                    className="button"
                >
                <span>
                    SHUFFLE
                </span>
                </button>
                <button
                    onClick={() =>{ const animations = getMergeSortAnimations(this.state.array); this.animate(animations);}}
                    className="button"
                >
                <span>
                    MERGESORT   
                </span>     
                </button>
                <button
                    onClick={() =>{ const animations = getQuickSortAnimations(this.state.array); this.animate(animations);}}
                    className="button"
                >
                <span>
                    QUICKSORT        
                </span>
                </button>
                <button
                    onClick={() =>{ let animations = getHeapSortArrayAnimations(this.state.array); this.animate(animations);}}
                    className="button"
                >
                <span>
                    HEAPSORT
                </span>
                </button>
                <button
                    onClick={() =>{ let animations = getSelectionSortAnimations(this.state.array); this.animate(animations);}}
                    className="button"
                >
                <span>
                    SELECTIONSORT
                </span>
                </button>
                <button
                    onClick={() =>{ let animations = getInsertionSortAnimations(this.state.array); this.animate(animations);}}
                    className="button"
                >
                <span>
                    INSERTIONSORT
                </span>
                </button>
                <button
                    onClick={() =>{ let animations = getBubbleSortAnimations(this.state.array); this.animate(animations);}}
                    className="button"
                >
                <span>
                    BUBBLESORT        
                </span>
                </button>
            </div>
            <div className="array-container">
                {array.map((value,idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`, width: window.innerWidth/this.state.numBars}}>
                    </div>
                ))}
            </div>
            </div>
        );

    }

}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}