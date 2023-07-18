import React from 'react';
import styled from 'styled-components';

const RightMainMenu = styled.section`
background-color: crimson;
display: block;
text-align: center;
padding: 10px;
`;

export const RightMenu = () => {

return (
    <RightMainMenu className="game-info">
    <div>Server Status</div>
    <div>Highscores</div>
    <div>Best Guilds</div>
    <div>Discord</div>
    </RightMainMenu>
)
}
