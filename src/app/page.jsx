import Movie from "./movie/page";

const Home = () => {
  // throw new Error('Error in Home')
  return (
    <div className="text-center">
         
      <div className="text-3xl flex justify-center items-center font-bold text-pink-600 p-10"> Hello world </div>  
      
      <div className="">
      <Movie></Movie>
      </div>
</div>
  );
};

export default Home;