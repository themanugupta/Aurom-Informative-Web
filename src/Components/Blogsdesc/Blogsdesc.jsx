import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

function Blogsdesc() {
      const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);
      const { blogId } = useParams();

      const { state } = useLocation();
      const [item, setItem] = useState(state);
      const [loading, setLoading] = useState(!state);

      useEffect(() => {
        if (!state && blogId) {
          const fetchBlog = async () => {
            try {
              const response = await fetch(`https://backend.auromapp.com/api/blogs/${blogId}`);
              if (!response.ok) throw new Error('Failed to fetch blog');
              const data = await response.json();
              setItem(data?.blog || data);
            } catch (error) {
              console.error('Error fetching blog:', error.message);
            } finally {
              setLoading(false);
            }
          };
          fetchBlog();
        }
      }, [blogId, state]);
  
  if (loading) {
    return (
      <div className="py-[100px] text-[#d9d9d9] flex justify-center items-center min-h-[50vh]">
        <span className="text-[20px]">Loading blog...</span>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="py-[100px] text-[#d9d9d9] flex justify-center items-center min-h-[50vh]">
        <span className="text-[20px]">Blog not found.</span>
      </div>
    );
  }

  return (
    <div
      className={`lg:w-[60%] ${
        isLgScreen ? "px-0" : "px-5"
      } py-[100px] text-[#d9d9d9] flex flex-col justify-center  mx-auto gap-[60px]`}
    >
      <img
        className="w-full h-[550px]  rounded-[40px] object-contain"
        src={item.blogThumbnail}
        alt=""
      />
      <div className="headings flex flex-col text-left   ">
        <span className="category text-[24px] font-medium pb-[16px]">
          {item.title}
        </span>
        <span className="text-[40px] font-bold">{item.tag}</span>
      </div>
      <div className="desc text-[20px] font-normal">{item.description}</div>

      {item?.additionalSections?.map((section, index) => (
        <div key={index}>
          <h3 className="text-[32px] font-bold pb-[24px]">{section.heading}</h3>
          <span className="desc text-[20px] font-normal">{section?.brief}</span>
        </div>
      ))}
      {/* <div>
        <h3 className="text-[32px] font-bold pb-[24px]">
          Miscommunication and relationship
        </h3>
        <span className="desc text-[20px] font-normal">
          This is because most of us are neither great at communicating
          ourselves nor misunderstandings are common issues in long distance
          relationship. Also, with a lack of common topics, the big issue is
          that partners may grow apart. The need for communication is to feel
          love and needed. Talking too much or too less, both ruin the
          excitement of a relationship. How much is adequate? Notice whether
          talking with your partner consumes so much time that it takes away
          from your everyday necessary work, normal socializing, and sleeping.
          It will give you clarity. Scheduling call and video chat timings is
          the solution to most problems enumerated above.{" "}
        </span>
      </div>
      <div>
        <h3 className="text-[32px] font-bold pb-[24px]">
          Too much Waiting and Planning
        </h3>
        <span className="desc text-[20px] font-normal">
          Young couples in relationship have to make adjustments with college
          attendance or job leaves to be able to meet each other. I always have
          to choose between going home for the holidays and going to meet him.
          We rarely have days off at similar timing. It is also expensive to
          travel and stay more often. Rare are those plans that get executed
          smoothly- where we both have at least three days off, can go somewhere
          amazing (and afford it!), I am not on my period and the world is not
          set out there to disturb our plans. Phew!!! I wonder did that ever
          happen to us. When plans fail, which they do 80% of the time, we feel
          heartbroken and crave each other more. Facts straight, our country is
          not the most support of long-distance relationship. Most of us have to
          secretly plan visits; the process is thrilling and exciting but can
          get exhausting at times. But as the lyrics of a famous song go, “jitni
          tu milti jaae, utni lage thodi thodi”- when you are with someone you
          love, you do not want time with them to end. After all the waiting and
          planning if you finally get to spend time with your partner, it is a
          feeling beyond words.{" "}
        </span>
      </div> */}
    </div>
  );
}

export default Blogsdesc