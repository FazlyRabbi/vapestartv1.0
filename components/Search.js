import { VscSearch } from "react-icons/vsc";

export default function Search() {
  return (
    <form>
      <div
        className="  text-white   
      w-[20rem]  relative font-eco text-[20px] font-bold"
      >
        <input
          type="search"
          id="default-search"
          className="block 
        p-5  pl-12
    
        
        border-none
        
      text-red-500

       focus:outline-none
        
       placeholder-white
    
        w-[100%] bg-[#393939] outline-none"
          placeholder="Search for products ..."
          required
        />

<VscSearch className=" absolute top-[50%] 
 ml-2
 -translate-y-[30%]
left-[2%]" />
      </div>
    </form>
  );
}
