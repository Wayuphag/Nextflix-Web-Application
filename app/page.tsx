import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ShowMovie from "./components/ShowMovie";
export default function Home() {
  return (
    <>
      <div className="flex items-center h-screen ">
        <div className="flex flex-col gap-4 w-120">
          <Image src="/N Series Originals.png" 
          width={150}
          height={200} 
          alt="tag"
          />
          <Image src="/Show Logo.png" 
          width={500}
          height={1000}
          alt="title"
          />
          <div className="flex items-center gap-2">
            <Image src="/Top10.png" 
            width={30}
            height={1000}
            alt="title"
            />
            <p className="text-xl font-bold">#1 in TV Shows Today</p>
          </div>
          <p>Determined to protect a young patient who escaped a mysterious
          cult, a psychiatrist takes the girl in, putting her own family — and
          life — in danger.</p>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-sm">
              <FontAwesomeIcon icon={faPlay}/>
              <p>Play</p>
            </button>
            <button className="flex items-center gap-2 bg-gray-500 opacity-80 text-white px-4 py-2 rounded-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>
              <p>More Info</p>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-40">
          <ShowMovie title="Populat on Nextflix">
            <p>Test</p>
          </ShowMovie>
      </div>
    </>
  );
}
