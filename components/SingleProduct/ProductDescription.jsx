export default function ProductDescription() {
  return (
    <section className="container mx-auto">
      <div className="lg:flex flex-col gap-6  w-[80%] lg:w-full mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex items-center gap-4 justify-start">
          <button className="bg-[#F2D71F] lg:w-48  lg:h-14 lg:text-[20px] text-[15px] text-black  py-2 px-2 flex justify-center items-center">
            Description
          </button>
          <button className="bg-[#393939] lg:text-[20px] text-white lg:w-80  lg:h-14 py-2 px-4 md:text-[14px] text-[13px] flex justify-center items-center">
            Additional information
          </button>
          <button className="bg-[#393939] lg:text-[20px] text-[15px] text-white lg:w-60 lg:h-14 py-2 px-4 flex justify-center items-center">
            Reviews
          </button>
        </div>
        <p className="border-4 border-[#E6E6E6] lg:p-12 text-[#A8A8A8] lg:w-full p-6 lg:mr-0 mt-4">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
          qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt, ut labore et dolore
          magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
          nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae
          consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla
          pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus,
          qui blanditiis praesentium voluptatum deleniti atque corrupti, quos
          dolores et quas molestias excepturi sint, obcaecati cupiditate non
          provident, similique sunt in culpa, qui officia deserunt mollitia
          animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est
          eligendi optio, cumque nihil impedit, quo minus id, quod maxime
          placeat, facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </section>
  );
}
