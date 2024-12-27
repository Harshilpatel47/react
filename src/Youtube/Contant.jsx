import React, { useState } from 'react';

const Content = () => {
  // Array of video objects with dynamic data (You can replace these with real data from an API)
  const videos = [
    {
      title: "Aaj Yamunaji Padharya Mare Gher | Halari Rass | Radadiya Saheb| Kamlesh banga",
      channel: "kamlesh chovatiya bangawala (Kamleshbhai Bangavala)",
      thumbnailUrl: "https://i.ytimg.com/vi/lN1IrTAA4DI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCEv_h_RbVpVqv0NhwaCqHOjeqjsw",
      videoUrl: "https://youtu.be/lN1IrTAA4DI?si=_EGvkY7chv2Rl0oR"
    },
    {
      title: "Nav vilash# Rajkot# Dvarkesh grup# Halari ras# kamlesh banga",
      channel: "kamlesh chovatiya bangawala (Kamleshbhai Bangavala)",
      thumbnailUrl: "https://i.ytimg.com/vi/aUTR4g2e1_c/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBsRc13oc68Pz7Upag3sguwJF3LMg",
      videoUrl: "https://youtu.be/aUTR4g2e1_c?si=RaXW-3JWl3Nh8rxo"
    },
    {
      title: "Do Patti: Raanjhan (Full Video) Kriti Sanon, ShaheerSheikh| Parampara Tandon | Sachet-Parampara",
      channel: "Aryan rajbanshi Vlog",
      thumbnailUrl: "https://i.ytimg.com/vi/i2E5YmGlaG0/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH8CYAC0AWKAgwIABABGHIgTSguMA8=&rs=AOn4CLAJu0waLAxD7_p-_i87HpMa7wM42g",
      videoUrl: "https://youtu.be/i2E5YmGlaG0?si=GR6S-LoKLdQQblbR"
    },
    {
      title: "Sahiba Music Video Jasleen Royal |Vijay Deverakonda Radhikka Madan|Stebin| Priya|Aditya| Sudhanshu",
      channel: "Music Mania",
      thumbnailUrl: "https://i.ytimg.com/vi/jBb7nhOZNyc/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGH8gHSgTMA8=&rs=AOn4CLBLCMJWEUUCIR8qOckrs5AiuYGVdg",
      videoUrl: "https://www.youtube.com/watch?v=jBb7nhOZNyc"
    },
    {
      title: "Mari Aankhe Ujagara - Gopal Bharwad - 4K Video - Latest Gujarati Song 2024",
      channel: "Jigar Studio",
      thumbnailUrl: "https://i.ytimg.com/vi/ZnEZ49lq_78/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAO7i12U9XPY2BVfb3mZGfJIkmbqQ",
      videoUrl: ""
    },
    {
      title: "Vala Aato Valap Nu Che Van ॥ Mari Ankhe Ujagra ॥ Rajdan Gadhvi Lokdayro ॥ Trending Gujarati Songs",
      channel: "Krutik Nizama Official",
      thumbnailUrl: "https://i.ytimg.com/vi/RJttXjAa_48/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGMgYyhjMA8=&rs=AOn4CLDCiZ7SAe9M7iQqJ6wGQFbvk5zkTQ",
      videoUrl: "https://www.youtube.com/watch?v=zebAfdxG_ao"
    },
    {
      title: "KDN 2023 8-3 | Hal Madi Hal Tane Teda Aavya re Kagavad Gam Thi | Mahisasur Mardini | Jai Jai Khodal",
      channel: "KHODALDHAM NORTH ZONE RAJKOT",
      thumbnailUrl: "https://i.ytimg.com/vi/svUBg45BB7E/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYfyA6KBUwDw==&rs=AOn4CLAV96kgi_NClv5sKC_Nu4qEeQ3ozw",
      videoUrl: "https://www.youtube.com/watch?v=0BPVb0MU8_M&pp=ygUKbm9ydGggem9uZQ%3D%3D"
    },
    {
      title: "Kapda Matching Karva Che | મારે કપડા મેચિંગ કરવા છે | Kaushik Bharwad | Hina Mir | Garba Song",
      channel: "Gujarati Singer",
      thumbnailUrl: "https://i.ytimg.com/vi/BjeN_wZwQMg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDd4IUdDTyvwXHTcMS3ZRc5LeSqOA",
      videoUrl: "https://www.youtube.com/watch?v=BjeN_wZwQMg"
    },
    {
      title: "Aaj Ki Raat -Full Song |Stree 2|Tamannaah Bhatia|Rajkummar Rao|Sachin-Jigar|Madhubanti|Divya|Amitabh",
      channel: "Saregama Music",
      thumbnailUrl: "https://i.ytimg.com/vi/hxMNYkLN7tI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCQG31vuR4HaNy7nudaAbXidtNAcg",
      videoUrl: "https://www.youtube.com/watch?v=hxMNYkLN7tI"
    },

    
    // Add more video objects here...
  ];



  return (
    <div className="content">
      {videos.map((video, index) => (
        <div className="video-card" key={index}>
          {/* Wrap thumbnail and info with a link */}
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <div className="video-thumbnail">
              <img
                src={video.thumbnailUrl}
                alt="Video Thumbnail"
                className="thumbnail-img"
              />
            </div>
            </a>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.channel}</p>
            </div>
       
        </div>
      ))}
    </div>
  );
};


export default Content;
