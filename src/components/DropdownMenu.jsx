// DropdownMenu.jsx
import { useState } from 'react';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkItems = [
        {
            label: "Prompt-templates",
            url: "https://sgtao.github.io/gpt-prompt-templates/"
        },
        {
            label: "Prompt Engineering Guid",
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
            <button onClick={toggleMenu}>Show Menu</button>
            {isOpen && (
                <ul>
                    {
                        linkItems.map((item, index) => (
                            <li style={{ width: "100%" }} key={index}>
                                <a  style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                                    href={item.url} target="_blank" rel="noreferrer" 
                                >
                                    {item.label}
                                </a>
                            </li>

                        ))
                    }
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;
