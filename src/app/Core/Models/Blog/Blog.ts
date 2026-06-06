export interface Blog 
{
    Id:number, 
    ImageUrl:string | null, 
    Title: string, 
    Content: string,
    CategoryName: string,
    UserName: string,
    CreatedAt: Date
}