import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
// import { HiMiniArrowUpCircle } from "react-icons/hi2";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenScroll = () => {
    let heighthidden = 550;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heighthidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => window.removeEventListener("scroll", listenScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={goTopBtn}>
          <TbSquareRoundedArrowUpFilled className="top-btn--icon"></TbSquareRoundedArrowUpFilled>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 2rem;
    height: 2rem;
    color: #1fc5a8;
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.1rem);
      }
      100% {
        transform: translateY(0.1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media}) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

export default GoTop;
