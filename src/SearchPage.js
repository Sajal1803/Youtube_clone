import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image=""
                channel="Sony SAB"
                verified
                subs="81.9M"
                noOfVideos="69K"
                description="Sony SAB brings you stories and characters, that inspire hope and happiness."
            />

            <hr />
            <VideoRow
                views="1.4M"
                subs="69M"
                description="Episode 3314: Jetha gets a new Name"
                channel="Sony SAB"
                title="Taarak Mehta Ka Ooltah Chashmah - Jetha Gets A New Name! -Ep 3314 - Full Episode- 27 November 2021"
                image="https://i.ytimg.com/vi/08Y4XmjojPw/maxresdefault.jpg"
                timestamp="2 years ago"
            />

            <VideoRow
                views="1.4M"
                subs="69M"
                description="Episode 3352: Taarak Throws Bitter Gourds At His Boss"
                channel="Sony SAB"
                title="NEW RELEASE |Taarak Throws Bitter Gourds-Taarak Mehta Ka Ooltah Chashmah-Ep 3352-Full EP-11 Jan 2022"
                image="https://i.ytimg.com/vi/5fTDWbBOyQk/maxresdefault.jpg"
                timestamp="2 years ago"
            />

            <VideoRow
                views="8.4M"
                subs="69M"
                description="Jethalal ने बदला अवतार और Iyer को सिखाया सबक | Taarak Mehta Ka Ooltah Chashmah | Comedy Express"
                channel="Sony SAB"
                title="Taarak Mehta Ka Ooltah Chashmah - Jetha Gets A New Name! -Ep 3314 - Full Episode- 27 November 2021"
                image="https://i.ytimg.com/vi/iRVPbaRBp9E/maxresdefault.jpg"
                timestamp="6 months ago"
            />

            <VideoRow
                views="3K"
                subs="69M"
                description="Chief inspector Pandey has fallen for the famous film actress, Chandrika Sherawat who comes to visit Imaan Chowki for a training. "
                channel="Sony SAB"
                title="किसका Dance देखकर पागल हुई Chandramukhi Chautala की Team? | F.I.R. | एफ.आई.आर. | Ep 35| Full Episode"
                image="https://i.ytimg.com/vi/6SKj_Tlmbmw/maxresdefault.jpg"
                timestamp="20 hours ago"
            />

            <VideoRow
                views="9.1M"
                subs="62M"
                description="Episode 187: Govinda And Sunita Ahuja Test Their Relationship"
                channel="Sony Television"
                title="The Kapil Sharma Show S2- Govinda & Sunita Ji's Love Test - Ep 187 - Full Episode -12th Sep 2021"
                image="https://i.ytimg.com/vi/63YVaYDsyIk/maxresdefault.jpg"
                timestamp="1 years ago"
            />

            <VideoRow
                views="124M"
                subs="69M"
                description="Watch the special compilation of Khajur, a child artist from The Kapil Sharma Show entertain the audiences with his witty jokes."
                channel="Sony SAB"
                title="Khajur Wants Prachi As His Mother | Kids Comedy | The Kapil Sharma Show"
                image="https://i.ytimg.com/vi/rTCJmBpXnhc/maxresdefault.jpg"
                timestamp="3 years ago"
            />

            <VideoRow
                views="4.7M"
                subs="69M"
                description="Gopiyo के Kanha Aaryav ने किया KBC के मंच का माहौल दिलचस्प."
                channel="Sony SAB"
                title="9 साल के Aaryav का सपना है KBC Host करना | Kaun Banega Crorepati Season 14"
                image="https://i.ytimg.com/vi/CMszsERSZzY/maxresdefault.jpg"
                timestamp="2 years ago"
            />
        </div>
    );
}

export default SearchPage;
