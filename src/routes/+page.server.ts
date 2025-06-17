import { jobs } from "$lib/fakeData";

export async function load() {
  // return {
  // 	jobs: (await scrapeJobs()).map((job, i) => {
  // 		return { id: i, ...job };
  // 	})
  // };
  return { jobs: jobs };
}
