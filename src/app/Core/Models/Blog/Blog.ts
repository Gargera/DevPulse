export interface Blog 
{
    id:number, 
    imageUrl:string | null, 
    title: string, 
    content: string,
    categoryName: string,
    userName: string,
    createdAt: Date
}