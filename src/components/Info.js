import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/context';
import {GoRepo} from 'react-icons/go';
import {FiUsers, FiUserPlus} from 'react-icons/fi';
import {GiStaryu} from 'react-icons/gi';

const Info = ()=>{
    const {gitHubUser} = React.useContext(AppContext);
    const {public_repos, followers, public_gists, following} = gitHubUser;

    const summaries = [
        {
            id:1,
            icon:<GoRepo className="icon"/>,
            label:'repos',
            value:public_repos,
            color:'pink'
        },
        {
            id:2,
            icon:<FiUsers className="icon"/>,
            label:'followers',
            value:followers,
            color:'green'
        },
        {
            id:3,
            icon:<FiUserPlus className="icon"/>,
            label:'following',
            value:following,
            color:'purple'
        },
        {
            id:4,
            icon:<GiStaryu className="icon"/>,
            label:'gists',
            value:public_gists,
            color:'yellow'
        },
    ]

    return(
        <section className="section">
            <Wrapper className="section-center">
                {summaries.map((summary)=>{
                   const {icon, label, value, color, id} = summary;
                    return(
                        <article className="item" key={id}>
                            <span className={color}>{icon}</span>
                            <div>
                                <h3>{value}</h3>
                                <p>{label}</p>
                            </div>
                        </article>                    
                )})}
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default Info;