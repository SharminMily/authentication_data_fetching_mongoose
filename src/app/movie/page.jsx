
import { MOVIES } from "./data";
import { handleForm } from "./action";

function Movie() {

    // async function handleForm(formData) {
    //     "use server";
    //     const movie = formData.get("movie");
    //     MOVIES.push(movie);
    //     console.log("movie", movie);
    
    //     // important
    //     revalidatePath("/movie")
    //   }   
  

  return (
    <div className="p-5">

      <h1 className="text-center mb-8 text-2xl font-bold text-blue-800">Movie</h1>
      <hr />

      <form action={handleForm} className="flex justify-center my-8">
        <input type=" text " name="movie" placeholder="Title" className="border-l-2 border-y rounded-l-md border-black p-2" />

        <input type="submit" title="Add Movie" className="bg-green-500 text-white  rounded-r-lg text-sm p-1 px-3" />
      </form>

      <div className="flex justify-center pb-10">
        <ul className="mb-10">
        {
            MOVIES.map((movie) => (<li key={movie}>{movie}</li> 

            )
        )}
        </ul>
      </div>


    </div>
  );
}

export default Movie;
