import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function Blogsdesc() {
      const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
      const params = useParams();

      console.log("params", params);
  
  return (
    <div className={`lg:w-[60%] ${isLgScreen ? "px-0" : "px-5" } py-[100px] text-[#d9d9d9] flex flex-col justify-center  mx-auto gap-[60px]`}>
        <img className='w-full h-[550px] rounded-[40px] object-cover' src="supportiveblog.png" alt="" />
        <div className="headings flex flex-col text-left   ">
          <span className="category text-[24px] font-medium pb-[16px]">Relationship</span>
          <span className='text-[40px] font-bold' >3 Main Problems In A Long Distance Relationship</span>
        </div>
        <div  className="desc text-[20px] font-normal">
        I am two years into a long distance relationship with my    boyfriend, which started with apprehension. They say long distance relationship does not work. We were ready to take the plunge due to the poison we so willingly consumed called love! I kept thinking about us living so far from each other, what if he caught feeling for another girl? What if he broke up with me? I was overthinking all the time but that’s when a friend of mine suggested I take advice on the Clarity App app. After using Clarity App App, it became a part of our life. Whenever we used to fight, I started taking advice from the Clarity App App’s listeners. They taught me the basics of a relationship and made my mind clear. Over the first few calls and chats, I made up my mind to fight my thoughts and take care of our relationship. However, in these two years, I have understood that it is not an easy ride but can also be very rewarding and worthwhile. There are three major issues we faced as a couple while taking the long-distance relationship road:
        </div>
       <div>
        <h3 className='text-[32px] font-bold pb-[24px]'>Communication issues</h3>
        <span className="desc text-[20px] font-normal">
        I often think of earlier times when phones were not invented or were not that common. Was it a more romantic time of handwritten letters and flowers? I feel it must have been a time of endless wait. I thank technology a hundred times just thinking about it. When you are not meeting adequately, virtual communication is the only hope. However, virtual communication comes with its own set of challenges- talking too much, too less, or miscommunications. With a click, I can connect with my boyfriend. We talked a lot in the beginning- a bit too much. There was a rush to tell everything. All we did was compensate for not being able to meet by talking too much. After a point, everyone is bound to lose on topics to talk about. Later, there were too many silences and “hmmm” in our phone calls. Another communication barrier one might face is talking less or the mere ‘feeling’ that you both talk less. Because phones are right there in our hands, we do expect too much availability from our partners.
        </span>
       </div>
       <div>
        <h3 className='text-[32px] font-bold pb-[24px]'>Miscommunication and relationship</h3>
        <span className="desc text-[20px] font-normal">
        This is because most of us are neither great at communicating ourselves nor misunderstandings are common issues in long distance relationship. Also, with a lack of common topics, the big issue is that partners may grow apart. The need for communication is to feel love and needed. Talking too much or too less, both ruin the excitement of a relationship. How much is adequate? Notice whether talking with your partner consumes so much time that it takes away from your everyday necessary work, normal socializing, and sleeping. It will give you clarity. Scheduling call and video chat timings is the solution to most problems enumerated above.        </span>
       </div>
       <div>
        <h3 className='text-[32px] font-bold pb-[24px]'>Too much Waiting and Planning</h3>
        <span className="desc text-[20px] font-normal">
        Young couples in relationship have to make adjustments with college attendance or job leaves to be able to meet each other. I always have to choose between going home for the holidays and going to meet him. We rarely have days off at similar timing. It is also expensive to travel and stay more often. Rare are those plans that get executed smoothly- where we both have at least three days off, can go somewhere amazing (and afford it!), I am not on my period and the world is not set out there to disturb our plans. Phew!!! I wonder did that ever happen to us. When plans fail, which they do 80% of the time, we feel heartbroken and crave each other more. Facts straight, our country is not the most support of long-distance relationship. Most of us have to secretly plan visits; the process is thrilling and exciting but can get exhausting at times. But as the lyrics of a famous song go, “jitni tu milti jaae, utni lage thodi thodi”- when you are with someone you love, you do not want time with them to end. After all the waiting and planning if you finally get to spend time with your partner, it is a feeling beyond words.            </span>
       </div>

       
        
    </div>
  )
}

export default Blogsdesc