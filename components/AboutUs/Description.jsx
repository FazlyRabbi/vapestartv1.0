import Image from "next/image";
import product1 from "/img/home1-bg2-min-copyright.jpg";
import { FaLinkedin, FaPinterestP } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function () {
  return (
    <section>
      <div className="lg:container md:5/6 w-3/4  mx-auto lg:flex  items-center">
        {/* photo gallery section   */}
        <div className="flex gap-4 lg:w-1/2">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Image className="h-96 " src={product1}></Image>
            <Image className="h-60 " src={product1}></Image>
          </div>
          <div className="w-full flex flex-col items-center justify-center  gap-4">
            <Image className="h-60 " src={product1}></Image>
            <Image className="h-96 " src={product1}></Image>
          </div>
        </div>

        {/* description section  */}
        <div className="lg:w-1/2 lg:py-20 md:py-20 py-12">
          <div className="w-[92%] mx-auto flex flex-col items-start justify-center">
            <h1 className="text-[30px] font-eco font-bold mb-8">
              Your One-Stop Vape Shop
            </h1>
            <div>
              <div className="relative">
                <div className="absolute bg-[#F2D71F] pr-8">
                  <p className="font-black uppercase lg:text-[80px] md:text-[50px] text-[30px] lg:-mt-8 md:-mt-5 -mt-3 font-bun">
                    W
                  </p>
                </div>
              </div>
              <p className="ml-28">
                Welcome to Vapester! Founded in 2013, vel magna pellentesque,
                dignissim non turpis, pulvinar eget rutrum sapien. Fusce ipsum
                et lobortis, mattis neque nec a viverra. Donec vehicula elit sed
                justo a cursus pulvinar. Proin quis maximus nisi. Vestibulum a
                ultricies orci. Maecenas id tempor diam, in commodo mauris.
                Praesent turpis et faucibus, tellus
              </p>
            </div>
            <div className="space-y-6">
              <p>
                ullamcorper ac vehicula ante. Aliquam id orci auctor, tristique
                sapien eu, cursus mi. Nulla aliquet turpis, tincidunt a faucibus
                in, fermentum vel ligula. Mauris urna elit, faucibus nec auctor
                quis, aliquam purus. Aliquam quis ex at lorem facilisis dictum
                vel vitae odio.
              </p>
              <p>
                Vivamus ultrices, enim sed laoreet congue, leo lorem finibus
                urna, ac rutrum justo leo massa. Quisque dictum a pulvinar et
                faucibus. Proin nisl dolor, volutpat eget lacinia sit amet,
                convallis at odio. Aenean varius, elit tristique posuere
                dapibus, nisi ex aliquet erat, at viverra orci arcu quis neque.
                Morbi ipsum dui, fringilla id magna non, eleifend efficitur mi.
                Donec gravida ac ex vel molestie. Proin rutrum tortor vitae
                dolor volutpat, at tincidunt velit tristique. Nam id sapien dui.
                Aenean scelerisque erat erat, a imperdiet mi rhoncus nec.
              </p>
              <p>
                Phasellus odio orci, molestie id enim vitae, suscipit placerat
                purus. In a odio ex. Pellentesque euismod elit imperdiet odio
                rhoncus, nec imperdiet ex efficitur.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:ml-8 md:ml-6 ml-2">
            <ul className=" text-capilalize flex space-x-4">
              <li className="p-3  border cursor-pointer bg-[#16ABBD] border-none">
                <AiOutlineTwitter className="text-[1.2rem] cursor-pointer text-white" />
              </li>
              <li className="p-3 border cursor-pointer bg-[#415EAA] border-none">
                <BsFacebook className="text-[1.2rem] text-white" />
              </li>
              <li className="p-3  border bg-[#E69731] border-none">
                <AiFillInstagram className="text-[1.2rem] cursor-pointer text-white" />
              </li>
              <li className="p-3  border cursor-pointer bg-[#0A66C2] border-none">
                <FaLinkedin className="text-[1.2rem] text-white" />
              </li>
              <li className="p-3  border cursor-pointer bg-[#B7081B] border-none">
                <FaPinterestP className="text-[1.2rem] text-white" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
