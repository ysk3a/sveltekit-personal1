// import type { PageServerData } from "./$types";

// export const load: PageServerData = async () => {
//     return {
//         dataD: getDomainList(),
//         lazy: {
// 			dataD: getDomainList(),
// 		},
//     }
// };

// const getDomainList = async (
//     domain = 'facebook',
//     limit = 1
// ) => {
//     const res = await fetch(
//         `https://api.domainsdb.info/v1/domains/search?domain=${domain}?limit=${limit}`,
//     )
//     const postData = await res.json()
//     return postData
// } 

// import type { PageServerLoad } from "./$types"

// export const load: PageServerLoad = async () => {
// 	return {
// 		posts: getMyAll(10),
// 		lazy: {
// 			posts: getBlogPostList(90, 10, 3000),
// 		},
// 	}
// }

// getMyAll = async (
//     limit: number = 100,
//     skip?: number = 0,
//     timeout?: number = 0,
// ) => {
//     const res = await fetch(
//         `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`,
//     )
//     const postData = await res.json()
//     await setTimeout(timeout)
//     return postData.posts
// }

// function getMyAll(arg0: number): any {
//     throw new Error("Function not implemented.")
// }
