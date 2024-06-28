import React, { useState, useRef } from 'react';

const teamMembers = [
    { id: 1, name: 'Dr. Rick McCartney', position: 'CEO', image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483259_Rick%20McCartney%20.webp' },
    { id: 2, name: 'Chris Koha', position: 'COO', image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832ae_655d505c9d551c9c11dd3613_Chris20Koha.webp' },
    { id: 3, name: 'Caroline Nieto', position: 'Chief Product Officer', image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/65cd134a7ece047ea2260d5b_Caroline%20Nieto.webp' },
    { id: 4, name: 'Víctor Albertos', position: 'CTO', image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832e6_655d504bfd0e67e20640dbbd_ViCC81ctor20Albertos.webp' },
    { id: 5, name: 'Dr. Jana Schmidt', position: 'Chief Innovation Officer', image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d348325a_655d4fbc461dbfc3c7e1914e_Dr.20Jana20Hapfelmeier.webp' },
    { id: 6, name: 'Adrián Rubio', position: 'VP of Engineering', image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d348325c_655d50b27e70d440e4404528_AdriaCC81n20Rubio.webp' },
    { id: 7, name: 'Cy Serrano', position: 'VP of Product', image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832c7_655d4fcd461dbfc3c7e19739_Cy20Serrano.webp' },
    { id: 8, name: 'Lenya McGrath', position: 'VP of Partnerships', image: 'https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/65e0bbf51f50ea7c26f413f5_Lenya%20McGrath.webp' }
];

const TeamMember = ({ member }) => {
    const [hovered, setHovered] = useState(false);
    const [coords, setCoords] = useState({ x: '50%', y: '50%' });
    const divRef = useRef(null);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleOnMouseMove = (event) => {
        const rect = divRef.current.getBoundingClientRect();
        const diffX = ((event.clientX - rect.left) / rect.width) * 100;
        const diffY = ((event.clientY - rect.top) / rect.height) * 100;
        setCoords({ x: `${diffX}%`, y: `${diffY}%` });
    };

    return (
        <div ref={divRef} className={`team__item ${hovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleOnMouseMove}>
            <div className="team__row animating">
                <div className="team__index">
                    <div className="f-40 light">{`0${member.id}`}</div>
                </div>
                <div className="f-40 light">{member.name}</div>
                <div className="team__position">
                    <div className="f-20 is--500">{member.position}</div>
                </div>
            </div>
            <div className="team__avatar--parent" style={{ opacity: hovered ? 1 : 0, visibility: hovered ? 'visible' : 'hidden' }}>
                <div className="team__avatar"
                    style={{
                        top: coords.y,
                        left: coords.x,
                        width: '250px', // increased size
                        height: '250px', // increased size
                        borderRadius: '50%',
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'translate(-50%, -50%)',
                        transition: 'transform 0.3s ease',
                    }}>
                    <img
                        src={member.image}
                        alt={member.name}
                        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                    />
                </div>
            </div>
            <style jsx>{`
                .team__item {
                    background: #f4f4f4;
                    padding: 20px;
                    text-align: center;
                    cursor: pointer;
                    transition: background 0.3s ease, color 0.3s ease;
                    margin-bottom: 20px;
                    width: 100%;
                    position: relative;
                    border-bottom: 1px solid black;
                }
                .team__item:hover {
                    background: #DF1780;
                    color: white;
                }
                .team__row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .team__index .f-40 {
                    font-size: 40px;
                    font-weight: light;
                }
                .team__position .f-20 {
                    font-size: 20px;
                    font-weight: 500;
                }
                .team__avatar--parent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: visible; // ensure the avatar is not clipped
                    pointer-events: none;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s ease;
                    z-index: 100; /* Bring avatar in front */
                }
                .team__item:hover .team__avatar--parent {
                    opacity: 1;
                    visibility: visible;
                }
                .team__avatar {
                    position: absolute;
                }
            `}</style>
        </div>
    );
};

const Team = () => {
    return (
        <div className="team__list">
            {teamMembers.map((member) => (
                <TeamMember key={member.id} member={member} />
            ))}
            <style jsx>{`
                .team__list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    align-items: center;
                    padding: 20px;
                }
            `}</style>
        </div>
    );
};

export default Team;
