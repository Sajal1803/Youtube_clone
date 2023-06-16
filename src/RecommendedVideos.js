import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard.js'

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
        <VideoCard
          title="React 101 Crash Course | 2022/2023"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage=""
          channel="Sonny Sangha"
          image="https://img.youtube.com/vi/tbvguOj8C-o/sddefault.jpg"
        />
        <VideoCard
        title="[GAMECHANGER] FUTURE OF INDIAN WEB DEVELOPMENT 🚀"
        views="1.3M Views"
        timestamp="7 days ago"
        channelImage="https://apttutorials.com/yt-test.php?loc=Asia%2FCalcutta&n1=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCc7gpqMnnOSbU_F2-5MVVZw&usern=&ran=800"
        channel="Sheryians Coding School"
        image="https://img.youtube.com/vi/fUQU8dsqjUM/sddefault.jpg"/>

        <VideoCard
        title="Taarak Mehta Ka Ooltah Chashmah-Jetha Gets Babita's Phone! -Ep 3313-Full Episode - 26 November 2021"
        views="2.3M Views"
        timestamp="1 year ago"
        channelImage=""
        channel="Sony SAB"
        image="https://img.youtube.com/vi/CA0GjYpLFbM/sddefault.jpg"/>

        <VideoCard
        title="Leke Pehla Pehla Pyar (Cover Song ) | Ayaana Khan | Ramji Gulati | Official Video | Ruchi Borana"
        views="25M Views"
        timestamp="1 year ago"
        channelImage=""
        channel="Soaregama Music"
        image="https://img.youtube.com/vi/DE9Vyci9xeY/sddefault.jpg"/>

        <VideoCard 
        title="All Software Developers NEED a Portfolio"
          views="2.3M Views"
          timestamp="9 Months ago"
          channelImage=""
          channel="ForrestKnight"
          image="https://img.youtube.com/vi/ncpG-9jKBEo/sddefault.jpg"/>

        <VideoCard 
        title="FAMOUS WEDDING SHOW (FULL) 2022 - Quick Style"
          views="113M Views"
          timestamp="11 Moths ago"
          channelImage=""
          channel="TheQuickStyle"
          image="https://img.youtube.com/vi/ardtvdR28SQ/sddefault.jpg"/>

        <VideoCard
        title="Full Stack Developer Reviews Viewer Portfolios | Junior Developer Portfolio Reviews"
        views="197k Views"
        timestamp="1 year ago"
        channelImage=""
        channel="Darian Sampare"
        image="https://img.youtube.com/vi/Eb6yFhkzpmI/sddefault.jpg"/>

        <VideoCard
        title="नकिल Jetha और Bapuji ने जीता असली Jetha और Bapuji का दिल | India's Best Dancer | 5 Star Performance"
        views="6.5M Views"
        timestamp="10 Months ago"
        channelImage=""
        channel="LIV Music"
        image="https://img.youtube.com/vi/qA616x7whlM/sddefault.jpg"/>
      </div>
    </div>
  );
}

export default RecommendedVideos;
