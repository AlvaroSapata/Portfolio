import React from 'react'

function Contact() {
  const handleScrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id='Contact'>
      <button>
        <a href="#Home" onClick={handleScrollToHome}>
          Home
        </a>
      </button>
      <div>
        <a href="https://www.linkedin.com/in/%C3%A1lvaro-mart%C3%ADnez-fern%C3%A1ndez-de-velasco-0034b7161/">
          <img src="/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/AlvaroSapata">
          <img src="/github.png" alt="linkedin" />
        </a>
        <a href="">
          <img src="" alt="email" />
        </a>
      </div>
    </div>
  )
}

export default Contact