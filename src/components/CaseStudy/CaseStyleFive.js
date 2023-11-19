import React from 'react';
import { Link } from 'react-router-dom';

const CaseStyleFive = (props) => {
    const { caseClass } = props;
    return (
        <div className={caseClass ? caseClass : 'project-item'}>
            <div className="project-img">
                <img
                    src={props.caseImage}
                    alt={props.caseTitle}
                />
            </div>
            <div className="project-content">
                <div className="vertical-middle">
                    <div className="vertical-middle-cell">
                        <h3 className="title"><Link to="/case-study/style-1">{props.caseTitle}</Link></h3>
                        <span className="category"><Link to="#">{props.caseCategory}</Link></span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default CaseStyleFive;