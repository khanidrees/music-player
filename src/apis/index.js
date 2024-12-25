import SONGS from '../data';
export const getSongs = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(SONGS)
        },600);
    })
}