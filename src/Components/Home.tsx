import React from "react";
import logo from "../assets/chatgpt.svg";
import { useState } from "react";
import { getChatGPTResponse } from "../openaiService";

interface HomeProps {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

const Home: React.FC<HomeProps> = ({ isSidebarVisible, toggleSidebar }) => {
  const mainContentStyles = {
    width: isSidebarVisible ? "calc(100% - 250px)" : "100%", // Adjust the width based on the visibility of the sidebaust the left margin based on the visibility of the sidebar
    transition: "width 0.3s ease, margin-left 0.3s ease", // Add transition for smooth animation
  };

  console.log(import.meta.env.REACT_APP_OPENAI_API_KEY);

  const [input, setInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const chatResponse = await getChatGPTResponse({
        prompt: input,
        max_tokens: 150,
      });
      setResponse(chatResponse.choices[0].text.trim());
    } catch (error) {
      console.error("Error fetching ChatGPT response:", error);
    }
  };

  return (
    <div className="home-container" style={mainContentStyles}>
      <div className="nav-bar">
        <div className="nav-bar-left">
          <svg
            className="toogle-sidebar"
            fill="none"
            strokeWidth={2}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="30"
            height="40"
            onClick={toggleSidebar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="30"
            height="40"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            />
          </svg>
          <div className="title">
            <p>ChatGPT</p>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="30"
              height="40"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              />
            </svg>
          </div>
        </div>
        <div className="nav-bar-right">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="40"
            height="40"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="home-page">
        <img src={logo} alt="logo" width="50" height="50" />
        <div className="list-menu">
          <div className="question">
            <p>What is the use of API?</p>
          </div>
          <div className="answer">
            <img src={logo} alt="logo" width="20" height="auto"></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vivamus at augue eget arcu dictum varius duis. Vulputate sapien
              nec sagittis aliquam malesuada bibendum. Quis ipsum suspendisse
              ultrices gravida dictum fusce ut placerat. Eu turpis egestas
              pretium aenean pharetra magna ac placerat. Magna etiam tempor orci
              eu lobortis elementum nibh. Turpis massa tincidunt dui ut. Auctor
              neque vitae tempus quam pellentesque nec. Gravida dictum fusce ut
              placerat orci. Tellus id interdum velit laoreet id donec ultrices
              tincidunt. Tempor id eu nisl nunc mi ipsum. Quis imperdiet massa
              tincidunt nunc. Diam quam nulla porttitor massa id. Scelerisque
              eleifend donec pretium vulputate sapien nec. Justo eget magna
              fermentum iaculis. Pretium lectus quam id leo in vitae turpis
              massa. Sem viverra aliquet eget sit amet tellus. Eros in cursus
              turpis massa tincidunt. Ac feugiat sed lectus vestibulum. Natoque
              penatibus et magnis dis parturient montes nascetur. At urna
              condimentum mattis pellentesque id nibh tortor.
            </p>
          </div>
          <div className="question">
            <p>{input}</p>
          </div>
          <div className="answer">
            <img src={logo} alt="logo" width="20" height="auto" />
            <p>{response}</p>
          </div>
        </div>
      </div>
      <div className="search-box">
        <div className="wrapper">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="30"
            height="30"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.25 6a.75.75 0 0 0-1.5 0v4.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V9.75Z"
            />
          </svg>
          <input
            type="text"
            className="centered-input"
            placeholder="Message ChatGPT"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></input>
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="30"
            height="30"
            onClick={handleSubmit}
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
