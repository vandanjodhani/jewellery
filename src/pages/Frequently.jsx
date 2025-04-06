import React from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from 'antd';
const text = `
 Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur 
 lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
`;
const items = [
    {
        key: '1',
        label: 'Mauris congue euismod purus at semper. Morbi et vulputate massa?',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'Donec mattis finibus elit ut tristique?',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'Vestibulum a lorem placerat, porttitor urna vel?',
        children: <p>{text}</p>,
    },
    {
        key: '4',
        label: 'Aenean elit orci, efficitur quis nisl at, accumsan?',
        children: <p>{text}</p>,
    },
    {
        key: '5',
        label: 'Pellentesque habitant morbi tristique senectus et netus?',
        children: <p>{text}</p>,
    },
    {
        key: '6',
        label: 'Nam pellentesque aliquam metus?',
        children: <p>{text}</p>,
    },
    {
        key: '7',
        label: 'Aenean elit orci, efficitur quis nisl at?',
        children: <p>{text}</p>,
    },
    {
        key: '8',
        label: 'Morbi gravida, nisi id fringilla ultricies, elit lorem?',
        children: <p>{text}</p>,
    },
];

const Frequently = () => {
    return (
        <>
            <div className="freq-title-outer">
                <div className="container">
                    <div className="freq-title-inner">
                        <h2>Frequently Questions</h2>
                        <div className="freq-path">
                            <span><Link to="/">Home</Link></span>
                            <span>&gt;</span>
                            <span><Link to="/frequently"> Frequently Questions</Link></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="question-outer">
                <div className="container">
                    <div className="question-inner">
                        <div className="qust-intro">
                            <h4>Below are frequently asked questions, you may find the answer for yourself</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis.
                                Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor
                                sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae
                                vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
                        </div>
                        <div className="questions">
                            <div className="quest-inner">
                                <Collapse accordion defaultActiveKey={1} items={items} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frequently
