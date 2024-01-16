// import Strapi from "strapi-sdk-js"; // https://strapi-sdk-js.netlify.app/

// const strapi = new Strapi();

// export default strapi;
export async function fetcher(url) {
    let res = await fetch(url);

    
    const data = await res.json();
    return data;
    
}