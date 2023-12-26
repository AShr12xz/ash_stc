import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function MemberCard(props) {
    return (
        <div>
            <div className="member-card">
                <img src={props.img} alt={props.name} className="member-card-img" />
            </div>

            <div className="description">
                <p className="member-card-name">{props.name}</p>
                <p className="member-card-title">{props.title}</p>
                <a href={props.linkIn}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </div>
    );
}

export default MemberCard;
