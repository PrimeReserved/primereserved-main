import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaBehance } from "react-icons/fa";

interface TeamMember {
  name: string;
  position: string;
  avatar: string;
  linkedIn?: string;
  github?: string;
  gmail?: string;
  behance?: string;
  description: string;
}

interface TeamMembersProps {
  backgroundImage?: string;
  backgroundColor?: string;
  heading?: string;
  paragraph?: string;
  members: TeamMember[];
}

const TeamMembers: React.FC<TeamMembersProps> = ({
  backgroundImage,
  backgroundColor,
  heading,
  paragraph,
  members,
}) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openPopup = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div
      className="team-members px-[3rem] py-[4rem]"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundColor: backgroundColor || "transparent",
      }}
    >
      {heading && <h2 className="heading">{heading}</h2>}
      {paragraph && <p className="paragraph">{paragraph}</p>}
      <div className="members-container">
        {members.map((member, index) => (
          <div key={index} onClick={() => openPopup(member)} className="member">
            <div className="avatar">
              <Image
                src={member.avatar}
                alt={member.name}
                width={150}
                height={150}
                className="image"
              />
            </div>
            <p className="name">{member.name}</p>
            <p className="position">{member.position}</p>
          </div>
        ))}
      </div>
      {selectedMember && (
        <div className="popup">
          <div className="content">
            <div className="flex items-center justify-center">
              <div className="avatar w-32">
                <Image
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  width={150} // Same size as on the page
                  height={150} // Same size as on the page
                />
              </div>
            </div>
            <p className="name">{selectedMember.name}</p>
            <p className="position">{selectedMember.position}</p>
            <div className="links">
              {selectedMember.linkedIn && (
                <a
                  href={selectedMember.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              )}
              {selectedMember.github && (
                <a
                  href={selectedMember.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              )}
              {selectedMember.gmail && (
                <a
                  href={`mailto:${selectedMember.gmail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                </a>
              )}
              {selectedMember.behance && (
                <a
                  href={selectedMember.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaBehance />
                </a>
              )}
            </div>
            <div className="description">{selectedMember.description}</div>
            <button className="close-button" onClick={closePopup}>
              X
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        .team-members {
          text-align: center;
        }

        .heading {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .paragraph {
          font-size: 16px;
          margin-bottom: 20px;
        }

        .members-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .member {
          cursor: pointer;
          margin: 10px;
          transition: transform 0.3s ease;
        }

        .member:hover {
          transform: scale(1.1);
        }

        .avatar {
          border-radius: 50%;
          overflow: hidden;
          background-color: lightgray;
          padding: 0 5px;
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar .image {
          text-align: center;
          border-radius: 50%;
        }

        .name {
          font-weight: bold;
        }

        .position {
          font-size: 14px;
          color: gray;
          margin-bottom: 10px;
        }

        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          width: 60%;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          border-radius: 10px;
          box-sizing: border-box;
          z-index: 9999;
        }

        .content {
          text-align: center;
          position: relative;
          width: 100%;
        }

        .links {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }

        .links a {
          margin: 0 5px;
          background-color: #ac04ff;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          text-decoration: none;
        }

        .links a:hover {
          background-color: #ac04ff;
        }

        .description {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 10px;
          max-height: 250px; /* Limit the maximum height for scrolling */
          overflow-y: auto; /* Enable vertical scrolling if content exceeds max height */
        }

        .close-button {
          border: none;
          background-color: transparent;
          font-size: 20px;
          cursor: pointer;
          position: absolute;
          top: 10px;
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default TeamMembers;
