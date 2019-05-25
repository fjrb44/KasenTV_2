export interface Video{
    id: number;
    created_at?: string;
    updated_at?: string;
    description?: string;
    url: string;
    imageUrl: string;
    title: string;
    userId: number;
    categoryId?: number;
    visualizations: number;
    username: string;
    userLogo: string;
}