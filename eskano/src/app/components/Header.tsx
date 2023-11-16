import Image from "next/image";

const Header = () => {

  return (
    <div className="relative lg:mt-[-10%] mt-[-40%] mr-8 lg:mr-64">
        <h1 className="absolute lg:text-7xl lg:right-[35%] lg:mt-[5%] text-3xl right-[30%] mt-[-20%]">اسکانو</h1>
        <h1 className="absolute lg:text-4xl lg:right-[35%] mt-[-9%] lg:mt-[15%] right-[30%] text-lg">اولین سیاره کشف ایده‌های نو</h1>
        <div className="relative mt-64">
          <svg className="absolute lg:mr-[65%] lg:mt-[7%] mr-[57%] lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] mt-[7%]" width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.98241 28.5516C8.41294 22.3628 9.0231 16.2204 9.71286 10.0573" stroke="#94D940" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.5605 34.2197C23.3622 27.7733 27.1995 21.8999 30.6191 15.7882" stroke="#94D940" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30.2662 43.6051C34.8975 39.9629 40.0543 36.7216 45.639 34.8298" stroke="#94D940" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> 
          <svg className="lg:mr-[66%] lg:mt-[9%] absolute mr-[60%] mt-[10%] lg:h-[120px] lg:w-[150px] h-[100px] w-[100px]" width="194" height="135" viewBox="0 0 194 135" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M193.375 49.9651C188.439 35.9533 181.822 16.543 173.363 4.60535C133.008 22.4269 92.9071 40.4929 53.3673 60.1297C38.3633 67.5813 23.3465 78.0685 7.45943 83.4251C13.6391 95.1179 19.2652 107.051 25.3409 118.771C27.8291 123.57 32.0283 127.975 33.8006 133.107C78.3429 111.775 121.163 86.6816 166.577 67.1258C175.282 63.3776 183.337 58.01 192.39 55.0093C168.888 63.7136 146.557 76.2317 124.038 87.158C108.982 94.463 92.7593 99.2917 77.6128 106.542C63.2909 113.398 50.2782 123.002 35.8596 129.545C24.3222 113.971 11.5919 98.583 1.19058 82.2047C10.2344 77.7234 18.7609 72.1707 27.844 67.8131C76.1947 44.6171 124.986 22.5217 174.386 1.71395C181.545 17.1719 184.923 33.7507 191.155 49.4526C182.409 34.1967 178.188 16.788 169.85 1.40074C163.232 2.8246 156.698 7.015 150.57 9.76717C134.422 17.0191 118.417 24.1436 102.627 32.156C82.7671 42.2332 63.1499 52.5738 43.4296 62.9395C29.9129 70.0442 13.9804 76.1347 1.93369 85.7841C11.2319 101.921 20.7962 117.939 30.2778 133.952" stroke="#93D840" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> 
          <div className="text-[#95DA42] rotate-[-27deg] absolute lg:mr-[65%] lg:mt-[11%] lg:pr-11 lg:text-2xl pr-[67%] mt-4">شروع سفر</div>
          <p className="absolute lg:w-96 lg:text-lg justify-start lg:mr-[35%] lg:mt-[20%] text-xs w-[80%] mt-[45%]">
          لورم متن ساختگی که همراه با سئو کید باید درست شود. اینجا باید دو جمله باشد که تعریف کوتاهی داشته باشد از ما.
          </p>
        </div>
        <Image className="absolute mt-[80%] lg:mt-11 lg:right-[-2%] md:mt-[55%]" src='/assets/header.png' alt="a green plant" width={500} height={500} />
        <svg className="hidden lg:block w-[40%] h-full rotate-[30deg] lg:rotate-0 lg:right-0 mt-[-25%] lg:mt-0 lg:mr-0" viewBox="0 0 720 769" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 179.771C84 189.604 261.8 181.971 281 68.7709C305 -72.7291 16 27 189.5 208.271C352.552 378.625 1145 287 413.5 768" stroke="#95DA42" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10"/>
        </svg> 
        <svg className="hidden lg:hidden md:block mt-[-40%] md:mt-[-10%] md:mr-[-10%]" width="800" height="800" viewBox="0 0 346 436" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M183.5 84.0946C220.974 88.5348 323.831 86.8273 332.5 35.7115C343.336 -28.1834 191.5 -2.00021 313 114.711C398.908 197.234 311.5 403.288 1.5 434.5" stroke="#94D940" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10"/>
        </svg> 
        <svg className="lg:hidden md:hidden absolute mt-[0%] left-[-10%] w-[110%]" width="480" height="480" viewBox="0 0 346 436" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M183.5 84.0946C220.974 88.5348 323.831 86.8273 332.5 35.7115C343.336 -28.1834 191.5 -2.00021 313 114.711C398.908 197.234 311.5 403.288 1.5 434.5" stroke="#94D940" stroke-width="2" stroke-linecap="round" stroke-dasharray="10 10"/>
        </svg> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute lg:w-32 lg:h-32 lg:right-[5%] w-20 h-20 right-[10%] lg:top-[-155%] mt-[160%] z-20 md:mt-[10%] lg:mt-[100%] border-dashed border-2 lg:p-8 p-4 border-[#95DA42] bg-black rounded-full">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>  
        <Image className="absolute lg:mt-0 w-[50%] lg:w-[20%] lg:left-0 lg:right-[80%] right-[-5%] lg:top-[50%] mt-[-3%] lg:mr-0 md:mr-0 md:mt-[-110%] md:right-[-10%]" src='/assets/plant2.png' alt="a green plant" width={300} height={300} />  
        <svg className="absolute mt-[-2%] lg:mt-0 w-[20%] lg:left-10 lg:top-[70%] md:mt-[-105%] lg:mr-0 md:mr-0" width="144" height="139" viewBox="0 0 144 139" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.7205 0.575787C44.181 0.378848 44.6441 0.186574 45.1095 -0.000976562H98.8905C99.3559 0.186574 99.819 0.378848 100.28 0.575787H43.7205Z" fill="white"/>
            <path d="M32.8983 6.34342C33.1984 6.14899 33.4999 5.95673 33.803 5.76666H110.197C110.5 5.95673 110.802 6.14899 111.102 6.34342H32.8983Z" fill="white"/>
            <path d="M25.18 12.1111C25.406 11.9174 25.6332 11.7252 25.8617 11.5343H118.138C118.367 11.7252 118.594 11.9174 118.82 12.1111H25.18Z" fill="white"/>
            <path d="M19.1818 17.8787C19.3609 17.6854 19.5411 17.4932 19.7224 17.3019H124.278C124.459 17.4932 124.639 17.6854 124.818 17.8787H19.1818Z" fill="white"/>
            <path d="M14.3658 23.6463C14.5106 23.4533 14.6564 23.2611 14.8032 23.0696H129.197C129.344 23.2611 129.489 23.4533 129.634 23.6463H14.3658Z" fill="white"/>
            <path d="M10.4569 29.414C10.5745 29.2211 10.6929 29.0289 10.8122 28.8372H133.188C133.307 29.0289 133.426 29.2211 133.543 29.414H10.4569Z" fill="white"/>
            <path d="M7.29362 35.1816C7.38813 34.9889 7.48348 34.7966 7.57966 34.6048H136.42C136.517 34.7966 136.612 34.9889 136.706 35.1816H7.29362Z" fill="white"/>
            <path d="M4.77289 40.9492C4.84719 40.7566 4.9223 40.5643 4.99821 40.3725H139.002C139.078 40.5643 139.153 40.7566 139.227 40.9492H4.77289Z" fill="white"/>
            <path d="M2.82576 46.7169C2.88177 46.5243 2.93857 46.332 2.99614 46.1401H141.004C141.061 46.332 141.118 46.5243 141.174 46.7169H2.82576Z" fill="white"/>
            <path d="M1.4048 52.4845C1.44385 52.292 1.48367 52.0997 1.52425 51.9077H142.476C142.516 52.0997 142.556 52.292 142.595 52.4845H1.4048Z" fill="white"/>
            <path d="M0.477146 58.2521C0.500147 58.0597 0.523906 57.8674 0.54842 57.6754H143.452C143.476 57.8674 143.5 58.0597 143.523 58.2521H0.477146Z" fill="white"/>
            <path d="M0.0203922 64.0198C0.0279565 63.8273 0.0362745 63.6351 0.0453435 63.443H143.955C143.964 63.6351 143.972 63.8273 143.98 64.0198H0.0203922Z" fill="white"/>
            <path d="M0.0203922 69.7874C0.0128431 69.5953 0.00604477 69.4031 0 69.2106H144C143.994 69.4031 143.987 69.5953 143.98 69.7874H0.0203922Z" fill="white"/>
            <path d="M0.477146 75.555C0.454201 75.363 0.432009 75.1708 0.410575 74.9783H143.589C143.568 75.1708 143.546 75.363 143.523 75.555H0.477146Z" fill="white"/>
            <path d="M1.4048 81.3227C1.36586 81.1307 1.32769 80.9384 1.29028 80.7459H142.71C142.672 80.9384 142.634 81.1307 142.595 81.3227H1.4048Z" fill="white"/>
            <path d="M2.82576 87.0903C2.76994 86.8984 2.71489 86.7061 2.66063 86.5135H141.339C141.285 86.7061 141.23 86.8984 141.174 87.0903H2.82576Z" fill="white"/>
            <path d="M4.77289 92.8579C4.69889 92.6661 4.62569 92.4738 4.55328 92.2812H139.447C139.374 92.4738 139.301 92.6661 139.227 92.8579H4.77289Z" fill="white"/>
            <path d="M7.29362 98.6256C7.19958 98.4338 7.10637 98.2415 7.01398 98.0488H136.986C136.894 98.2415 136.8 98.4338 136.706 98.6256H7.29362Z" fill="white"/>
            <path d="M10.4569 104.393C10.3401 104.202 10.2242 104.009 10.1091 103.816H133.891C133.776 104.009 133.66 104.202 133.543 104.393H10.4569Z" fill="white"/>
            <path d="M14.3658 110.161C14.222 109.969 14.0792 109.777 13.9374 109.584H130.063C129.921 109.777 129.778 109.969 129.634 110.161H14.3658Z" fill="white"/>
            <path d="M19.1818 115.928C19.0044 115.737 18.8281 115.545 18.6528 115.352H125.347C125.172 115.545 124.996 115.737 124.818 115.928H19.1818Z" fill="white"/>
            <path d="M25.18 121.696C24.9571 121.505 24.7354 121.313 24.515 121.119H119.485C119.265 121.313 119.043 121.505 118.82 121.696H25.18Z" fill="white"/>
            <path d="M32.8983 127.464C32.6049 127.274 32.3129 127.081 32.0224 126.887H111.978C111.687 127.081 111.395 127.274 111.102 127.464H32.8983Z" fill="white"/>
            <path d="M43.7205 133.231C43.2808 133.043 42.8433 132.851 42.4082 132.655H101.592C101.157 132.851 100.719 133.043 100.28 133.231H43.7205Z" fill="white"/>
            <path d="M81.1553 138.422C78.1571 138.803 75.1015 138.999 72 138.999C68.8985 138.999 65.8429 138.803 62.8447 138.422H81.1553Z" fill="white"/>
        </svg>
    </div>
  );
};
export default Header;