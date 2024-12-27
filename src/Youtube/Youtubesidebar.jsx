import React from 'react';
import { FaHome, FaFireAlt, FaPlayCircle, FaThumbsUp, FaHistory, FaListUl } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar position-fixed">
      <ul className="sidebar-list">
        <li className="sidebar-item"><FaHome className="sidebar-icon" /> Home</li>
        <li className="sidebar-item"><FaFireAlt className="sidebar-icon" /> Trending</li>
        <li className="sidebar-item"><FaPlayCircle className="sidebar-icon" /> Subscriptions</li>
        <li className="sidebar-item"><FaThumbsUp className="sidebar-icon" /> Liked Videos</li>
        <li className="sidebar-item"><FaHistory className="sidebar-icon" /> History</li>
        <li className="sidebar-item"><FaListUl className="sidebar-icon" /> Library</li>
      </ul>
    </div>
  );
};

export default Sidebar;
