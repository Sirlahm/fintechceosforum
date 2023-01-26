const resources = [
  
  {
    resource: "Name Of Library",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
  },
  {
    resource: "Name Of Library",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
  },
];
const Card = ({ resourceName, desc }) => {
  return (
    <div className="flex space-x-5 items-center py-3 pb-5 px-4 border-b-[1px]">
      <div className=" bg-primary h-[120px] w-[200px]" />
      <div className="space-y-2 ">
        <p className=" text-base font-medium text-[#000000]">{resourceName}</p>
        <p className=" text-xs text-[##EBF0F9]">{desc}</p>
        <a href="/" className=" mt-2 bg-primary py-2 px-12 rounded-3xl inline-block text-center text-base font-medium">Learn More</a>

      </div>
    </div>
  );
};

const ResourceLibrary = () => {
  return (
    <div className="rounded-2xl border-[1px]   py-5">
      <div className="flex justify-between px-4 mb-4 items-center">
        <p className="text-xl font-bold">Resource Library</p>

        <a href="/" className=" text-md text-[#D9D9D9]">
          See All
        </a>
      </div>

      <div className=" space-y-3">
        {resources.map((resource) => (
          <Card resourceName={resource.resource} desc={resource.desc} />
        ))}
      </div>
    </div>
  );
};

export default ResourceLibrary;
