import React from 'react';
import styled from 'styled-components';

const Card = ({title, description, date,image}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image" ><img
        
         src={image} alt='image' className='card-image' /></div>
        <p className="card-title">{title}</p>
        <p className="card-body">
          {description}
        </p>
        <p className="footer">Created by <span className="by-name">Ajay singh</span> on <span className="date">{date}</span></p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    padding: 20px;
    width: 330px;
    min-height: 450px;
    border-radius: 20px;
    background: #212121;
    box-shadow: 5px 5px 8px #1b1b1b,
               -5px -5px 8px #272727;
    transition: 0.4s;
  }

  .card:hover {
    translate: 0 -10px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    color: #b2eccf;
    margin: 15px 0 0 10px;
  }

  .card-image {
    min-height: 170px;
    background-color: #313131;
    border-radius: 15px;
    background: #313131;
    box-shadow: inset 5px 5px 3px #2f2f2f,
              inset -5px -5px 3px #333333;
  }

  .card-body {
    margin: 13px 0 0 10px;
    color: rgb(184, 184, 184);
    font-size: 15px;
  }

  .footer {
    float: right;
    margin: 28px 0 0 18px;
    font-size: 13px;
    color: #b3b3b3;
  }

  .by-name {
    font-weight: 700;
  }`;

export default Card;
