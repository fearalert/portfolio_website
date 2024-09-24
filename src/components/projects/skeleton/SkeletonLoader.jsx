import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectCardSkeleton = () => {
  return (
    <div className="p-4 w-full md:w-1/2">
      <div className="h-full bg-dark-gray bg-opacity-40 p-8 rounded-lg">
        <Skeleton 
          height={180} 
          baseColor="#AEB7B3"
          highlightColor="#D1D5D4"
          className="rounded-lg"
        />
        <div className="mt-4">
          <Skeleton 
            width={80} 
            height={20} 
            baseColor="#AEB7B3"
            highlightColor="#D1D5D4"
            className="rounded-md" 
          />
        </div>
        <div className="mt-2">
          <Skeleton 
            width={150} 
            height={30} 
            baseColor="#AEB7B3" 
            highlightColor="#D1D5D4"
          />
        </div>
        <div className="mt-4">
          <Skeleton 
            width={180} 
            height={12} 
            baseColor="#AEB7B3" 
            highlightColor="#D1D5D4"
          />
        </div>
        <div className="mt-4">
          <Skeleton 
            width={120} 
            height={40} 
            borderRadius={24}
            baseColor="#AEB7B3" 
            highlightColor="#D1D5D4"
            className="rounded-md" 
          />
        </div>
      </div>
    </div>
  );
};


export default ProjectCardSkeleton