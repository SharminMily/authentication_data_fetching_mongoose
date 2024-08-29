"use server";

import { MOVIES } from "./data";
import { revalidatePath } from "next/cache";

export async function handleForm(formData) {   
    const movie = formData.get("movie");
    MOVIES.push(movie);
    console.log("movie", movie);

    // important
    revalidatePath("/movie")
  }
