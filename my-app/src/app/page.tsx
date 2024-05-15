import Image from "next/image";

export default function Home() {
  return (
          <div className="flex items center justify win-h screen bg-gray-100">
            <div className="w-full bg-white shadow-md ">
              <div className="Flex h-full">
                <div className="w-1/2 bg-gray-100">
                  <img className="w-full h-full" src="image 1.png" alt="image description"/>
                </div>
              </div>              
            </div>
          </div>
      );
}
