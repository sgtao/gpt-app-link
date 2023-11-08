// DropdownMenu.jsx
import { useState } from 'react';
import styled from "styled-components";


function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const StyledButton = styled.button`
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: white;
        color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
        &:hover {
            border: 3px solid transparent;
            border-color: #646cff;
            color: #646cff;
        }
        &:focus,
        &:focus-visible {
            outline: 4px auto -webkit-focus-ring-color;
        }
    `;
    const StyledLink = styled.a`
        white-space: nowrap;
        overflow: hidden;
        color: white;
        &:hover {
            color: #747bff;
        }
    `;

    const linkItems = [
        {
            label: "Prompt-templates",
            url: "https://sgtao.github.io/gpt-prompt-templates/"
        },
        {
            label: "Prompt Engineering Guide",
            url: "https://www.promptingguide.ai/jp/introduction/examples"
        },
        {
            label: "NameWiz",
            url: "https://namewiz.streamlit.app/"
        },
        {
            label: "Chat-GPT",
            url: "https://chat.openai.com/chat"
        },
        {
            label: "Bard",
            url: "https://bard.google.com/"
        },
        {
            label: "Bing AI",
            url: "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx"
        },
    ];
    return (
        <div>
            <StyledButton onClick={toggleMenu}>Show Menu</StyledButton>
            {isOpen && (
                <ul style={{ textAlign: "left", overflow: "hidden" }}>
                    {
                        linkItems.map((item, index) => (
                            <li style={{ width: "100%" }} key={index}>
                                <StyledLink
                                    href={item.url} target="_blank" rel="noreferrer"
                                    title={item.label}
                                >
                                    {item.label}
                                </StyledLink>
                            </li>

                        ))
                    }
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;
