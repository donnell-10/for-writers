import { useNavigate } from "react-router-dom";

const HomePageButtons =  () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between p-6">
            <button className="w-[275px] h-[275px]  border-4 bg-purple-300 hover:bg-purple-400 font-poppins" style={{borderRadius:'70px'}}>
                <h1 className="text-[50px] text-black">Prompts</h1>
                <p className="text-[12px] p-2 text-black">Don't know what to write? Let us give you an idea to kickstart you creative engine.</p>
            
            </button>
            <button className="w-[275px] h-[275px] border-4 bg-purple-400 hover:bg-purple-500 font-poppins" style={{borderRadius:'70px'}}
            onClick={() => navigate('/write')} >
                <h1 className="text-[50px] text-black">Write</h1>
                <p className="text-[12px] p-2 text-black">Put your ideas on a page and bring the world in you mind to life.</p>
            
            </button>
            <button className="w-[275px] h-[275px] border-4 bg-purple-300 hover:bg-purple-400 font-poppins" style={{borderRadius:'70px'}}>
                <h1 className="text-[50px] text-black">Read</h1>
                <p className="text-[12px] p-2 text-black">Enter a library composed of the work of writers all over the word. From beginners to experts!</p>
            
            </button>
        </div>
    )
}

export default HomePageButtons;

// import { useState } from 'react';
// import "../styles.css"

// const HomePageButtons = () => {
//   const buttons = ['Prompts', 'Write', 'Read'];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? buttons.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === buttons.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const getRotationStyle = (index) => {
//     const angle = (360 / buttons.length) * (index - currentIndex);
//     return {
//       transform: `rotateY(${angle}deg) translateZ(200px)`,
//     };
//   };

//   return (
//     <div className="relative flex items-center justify-center w-full h-64 max-w-md mx-auto perspective-1000">
//       {/* Carousel Wrapper */}
//       <div className="carousel flex justify-center items-center relative" style={{ width: '100%', height: '200px' }}>
//         {buttons.map((button, index) => (
//           <div
//             key={index}
//             className="carousel-item absolute transform transition-transform duration-500 ease-in-out"
//             style={getRotationStyle(index)}
//           >
//             <button
//               className={`w-36 h-36 rounded text-white font-semibold text-lg bg-purple-500 hover:bg-purple-600 shadow-lg flex items-center justify-center`}
//             >
//               {button}
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Prev Button */}
//       <button
//         className="absolute left-0 text-2xl font-bold text-purple-500 hover:text-purple-700 px-4 py-2"
//         onClick={handlePrev}
//       >
//         &#10094;
//       </button>

//       {/* Next Button */}
//       <button
//         className="absolute right-0 text-2xl font-bold text-purple-500 hover:text-purple-700 px-4 py-2"
//         onClick={handleNext}
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default HomePageButtons;
