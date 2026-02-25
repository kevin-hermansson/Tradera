export interface Auction {
  id: number;
  title: string;
  description: string;
  startPrice: number;
  currentPrice: number;
  startDate: string;
  endDate: string;
  userId: number;
}