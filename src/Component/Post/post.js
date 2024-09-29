import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
const Post = () => {
    return (
        <div className="post">
            <div className="postInfo">
                <img className='postInfoImg' src="https://th.bing.com/th/id/OIP.tntLLz1pfhYerBM08kymigHaGM?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="vfv" />
                <div className='postInfousername'>TigerSherof</div>
                <div className="timingInfo">. 36 min</div>
            </div>
            <div className="postImg">
                <img className='postImhage' src='https://th.bing.com/th/id/OIP.tntLLz1pfhYerBM08kymigHaGM?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
            </div>
            <div className="iconsBlock">
                <div className="leftIcon">
                    <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
                    <ModeCommentOutlinedIcon sx={{ fontSize: "25px" }} />
                    <SendOutlinedIcon sx={{ fontSize: "25px" }} />
                </div>
                <div>
                    <BookmarkBorderOutlinedIcon sx={{ fontSize: "25px" }} />
                </div>
            </div>
            <div className="likeSection">
                <div className="imagesLike">
                    <img className='likeImg' src='https://th.bing.com/th/id/OIP.tntLLz1pfhYerBM08kymigHaGM?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                    <img className='likeImg2' src='https://th.bing.com/th/id/OIP.tntLLz1pfhYerBM08kymigHaGM?w=186&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
                </div>
                <div className="noOfLikes">112,456 Likes</div>
            </div>
            <div className="postAbout">
                <div className="postAboutName">Tiger Sherof</div>
                <div className="infoComment">Happy Mother’s Day to my angel! ..</div>
            </div>
            <div className="noOfCooment">View All 467 Comments</div>
            <div className="addComment">Add a comment...</div>
        </div>
    )
}

export default Post