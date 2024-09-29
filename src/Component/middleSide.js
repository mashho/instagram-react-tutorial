import React from 'react'
import './middleSide.css'
import story from '../story.json';
import insta from '../assets/instagramLogo.png'
import Post from './Post/post';
const MiddleSide = () => {
    const storys = story.story;
    return (
        <div className="middleHomeSide">
            <div className="mobileTopBar">
                <div className="instalogo">
                    <img className='instalogoMobile' src={insta} />
                </div>
            </div>
            <div className="storyBlock">
                {
                    storys?.map((item, index) => {
                        return (
                            <div className="storyParticular">
                                <div className="imageDIv">
                                    <img className='statusImg' src={item.img} />
                                </div>
                                <div className="profileName">{item.name}</div>
                            </div>
                        );
                    })
                }
            </div>

            <div className="postSection">
                <Post />
                <Post/>
            </div>
        </div>
    )
}

export default MiddleSide