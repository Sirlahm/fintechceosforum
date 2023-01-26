
const Card = ({ group, name }) => {
  return (
    <div className=" bg-primary rounded-xl flex space-x-3 py-4 px-5">
      <div className=" bg-[#000000] rounded-full w-[40px] h-[40px]" />
      <div className="">
        <p className=" text-base font-medium text-[#000000]">{group}</p>
        <p className=" text-xs text-[##EBF0F9]">{name}</p>
      </div>
    </div>
  );
};

const Discussion = ({companies}) => {
  return (
    <div className="rounded-2xl bg-[#EBF0F9] px-4 py-5">
      <div className="flex justify-between mb-4 items-center">
        <p className="text-xl font-bold">Discussion</p>

        <a href="/" className=" text-md text-[#D9D9D9]">
          See All
        </a>
      </div>

      <div className=" space-y-3">
        {companies.map((company) => (
          <Card group={company.group} name={company.name} />
        ))}
      </div>
    </div>
  );
};

export default Discussion;
